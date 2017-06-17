import { Injectable } from '@angular/core';

import * as Victor from "victor"
import * as firebase from "firebase/app";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";


@Injectable()
export class RecommandationService {

  constructor(public af: AngularFireDatabase) { }

  public rechercherMeilleurSpot(vecteur:Array<any>):Observable<any>{
    let  vecteurUtilisateurCible:Victor =Victor.fromArray(vecteur);
   let  vecteurRechercher: Victor;
    let  idSpot: String;
    let  bureau: String;
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
            bureau = snapshot.bureau;
          } else {
              if(vecteurUtilisateurCible.distance(Victor.fromArray(snapshot.affinite))<vecteurUtilisateurCible.distance(vecteurRechercher)){
                vecteurRechercher = Victor.fromArray(snapshot.affinite);
                idSpot = snapshot.$key;
                bureau = snapshot.bureau;
              }
          }
        });
      return {'idSpot':idSpot,'bureau':bureau};
    });
};
public rechercherUtilisateursDuBureau(bureau:String){
  return this.af.list('/spots', {
      query: {
        orderByChild: 'bureau',
        equalTo: bureau 
      }
  }).map((snapshot)=>{return snapshot.islibre===0})
}

public lireUtilisateur(idUtilisateur:number){

     return this.af.object('/utilisateurs/'+idUtilisateur);
}

}
