import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public router: Router) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        return this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(message: string) {
    this.items.push({
      message: message,
      user: this.afAuth.auth.currentUser.displayName,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    this.msgVal = '';
  }
}
