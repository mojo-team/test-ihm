import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./noyau/auth/AuthGuard";
import {HomeComponent} from "./home/home.component";
import {MapComponent} from "./map/map.component";
import {RetourLogin} from "./noyau/auth/RetourLogin";
import {RechercheComponent} from "./recherche/recherche.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    component: LoginComponent,
    path: 'login',
    pathMatch: 'full',
    canActivate: [RetourLogin]
  },
  {
    component: MapComponent,
    path: 'map',
    canActivate: [AuthGuard]
  },
  {
    component: RechercheComponent,
    path: 'recherche',
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
