import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
declare var FB: any;


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {

    FB.init({
      appId: "1294487654003054",
      xfbml: true,
      version: "v2.6"
    });


  }

  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  public logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login'])
    });
  }

  public donneUrlPhotoUtilisateur() {
    return this.afAuth.auth.currentUser.photoURL;
  }
}

