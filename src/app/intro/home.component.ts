import {AfterViewInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  ngAfterViewInit(): void {
    //$('.slider').slider();
    //$('.slider').slider('pause');
  }

  public commencer() {
    this.router.navigate(['/login']);
  }

  public logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login'])
    });
  }
}
