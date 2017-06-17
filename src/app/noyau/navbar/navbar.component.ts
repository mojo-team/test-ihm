import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {Http, Headers, RequestOptions} from "@angular/http";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(public afAuth: AngularFireAuth, public router: Router, public http: Http) {
  }

  public logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login'])
    });
  }

  public ouvrirLeBot() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post("http://vivatech.pintade.org/push/avis", {}, options)
      .subscribe(() => {
        //window.location.href = "https://www.messenger.com/t/132675973976622";
      }, (error) => {
      console.log(error);
        //window.location.href = "https://www.messenger.com/t/132675973976622";
      })
  }

  public donneUrlPhotoUtilisateur() {
    return this.afAuth.auth.currentUser.photoURL;
  }
}

