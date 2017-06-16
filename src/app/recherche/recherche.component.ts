import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);

  }

}
