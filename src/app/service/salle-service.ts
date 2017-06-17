import {Injectable} from '@angular/core';
import {Salle} from "./salle";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import * as firebase from "firebase/app";
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from "angularfire2/database";


const SALLES: Salle[] = [{  "identifiantSalle": "salle1",  "nom": "Nom de la salle 1",
 "cheminPhoto": "/assets/images/experiences/zen.jpg",  "prix": 100,  "description": "Une Salle zen qui déchire",
  "notation": 4,  "nombrePlaces": 10,  "adresse": "une adresse",  "agencement": "En U",
   "experience": "zen",  "etage": 2,  "bureau": 204},
   {  "identifiantSalle": "salle1",  "nom": "Nom de la salle 1",
 "cheminPhoto": "/assets/images/experiences/copains.jpg",  "prix": 100,  "description": "Yessss les coupains",
  "notation": 4,  "nombrePlaces": 10,  "adresse": "une adresse",  "agencement": "En U",
   "experience": "zen",  "etage": 2,  "bureau": 204}];

@Injectable()
export class SalleService {


  constructor(public af: AngularFireDatabase) {
  }

  public recupereLesSalles(localisation: String, date: String, participants: Number, duree: Number): Observable<Salle[]> {
          return this.af.list('/salles', {
      query: {
    limitToLast: 10,
    orderByKey: true
      }
  }).map((snapshots)=>{return snapshots});
  }

  public recupereLesSallesRecommandeesPour(utilisateur: firebase.User): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }

  public recupereLesSallesParExperience(experience: string): Observable<Salle[]> {
        return this.af.list('/salles', {
      query: {
        orderByChild: 'experience',
        equalTo: experience
      }
  }).map((snapshots)=>{return snapshots});
  }

  public recupereLesSallesPreferePourUnUtilisateur(idutilisateur: string): Observable<Salle[]> {
    return this.af.list('/meilleures_salles', {
      query: {
        orderByChild: 'identifiantUtilisateur',
        equalTo: idutilisateur
      }
  }).map((snapshots)=>
  {return snapshots.map((item)=>{return this.recupererLaSalle(item.identifiantSalle)})});
}

public recupererLaSalle(idSalle:String):Observable<Salle>{
   return this.af.object('/salles/'+idSalle).map((item)=>{return item});
}
}
