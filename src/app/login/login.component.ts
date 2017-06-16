import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user && user.uid) {
        return this.router.navigate(['/recherche']);
      }
    });
  }

  loginAnonyme() {
    this.afAuth.auth.signInAnonymously();
  }

  loginGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
