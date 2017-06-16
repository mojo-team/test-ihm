import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/mapTo";
import 'rxjs/add/operator/take';

import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";


@Injectable()
export class RetourLogin implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authentifie => {
        console.log(authentifie);
        if (authentifie) {
          return this.router.navigate(['/']);
        }
      })
      .mapTo(true);
  }
}
