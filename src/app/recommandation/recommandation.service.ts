import { Injectable } from '@angular/core';

import * as Victor from "victor"
import * as firebase from "firebase/app";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";


@Injectable()
export class RecommandationService {

  constructor(public af: AngularFireDatabase) { }

  public rechercherMeilleurSpot(vecteur:Array<any>):Observable<String>{
    let  vecteurUtilisateurCible:Victor =Victor.fromArray(vecteur);
   let  vecteurRechercher: Victor;
    let  idSpot: String;
   return this.af.list('/spots', {
      query: {
        orderByChild: 'islibre',
        equalTo: 1 
      }
  }).map((snapshots,key)=>{
 
     snapshots.filter(snapshot => {
          if(vecteurRechercher === undefined){
            vecteurRechercher = Victor.fromArray(snapshot.affinite);
            idSpot = snapshot.$key;
          } else {
              if(vecteurUtilisateurCible.distance(Victor.fromArray(snapshot.affinite))<vecteurUtilisateurCible.distance(vecteurRechercher)){
                vecteurRechercher = Victor.fromArray(snapshot.affinite);
                idSpot = snapshot.$key;
              }
          }
        });
      return idSpot;
    });





  
};


}
