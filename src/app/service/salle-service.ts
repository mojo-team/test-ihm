import {Injectable} from '@angular/core';
import {Salle} from "./salle";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import * as firebase from "firebase/app";


const SALLES: Salle[] = [{  "identifiantSalle": "salle1",  "nom": "Nom de la salle 1",
 "cheminPhoto": "/xxx/ggg.png",  "prix": 100,  "description": "Une Salle zen qui déchire",
  "notation": 4,  "nombrePlaces": 10,  "adresse": "une adresse",  "agencement": "En U",
   "experience": "zen",  "etage": 2,  "bureau": 204},
   {  "identifiantSalle": "salle1",  "nom": "Nom de la salle 1",
 "cheminPhoto": "/xxx/ggg.png",  "prix": 100,  "description": "Une description de salle",
  "notation": 4,  "nombrePlaces": 10,  "adresse": "une adresse",  "agencement": "En U",
   "experience": "zen",  "etage": 2,  "bureau": 204}];

@Injectable()
export class SalleService {


  constructor() {
  }

  public recupereLesSalles(localisation: String, date: String, participants: Number, duree: Number): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }

  public recupereLesSallesRecommandeesPour(utilisateur: firebase.User): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }

  public recupereLesSallesParExperience(experience: string): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }
}
