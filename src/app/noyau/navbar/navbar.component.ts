import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  public logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login'])
    });
  }

  public donneUrlPhotoUtilisateur(){
    console.log(this.afAuth.auth.currentUser.photoURL);
    return this.afAuth.auth.currentUser.photoURL;
  }
}

