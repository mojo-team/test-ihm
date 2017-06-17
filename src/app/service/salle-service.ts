import {Injectable} from '@angular/core';
import {Salle} from "./salle";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import * as firebase from "firebase/app";


const SALLES: Salle[] = [{experience: 'zen', lieu: 'Paris', capacite: 5}];

@Injectable()
export class SalleService {


  constructor() {
  }

  public recupereLesSalles(localisation: String, date: Date, participants: Number, duree: Number): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }

  public recupereLesSallesRecommandeesPour(utilisateur: firebase.User): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }

  public recupereLesSallesParExperience(experience: string): Observable<Salle[]> {
    return Observable.of<Salle[]>(SALLES);
  }
}
