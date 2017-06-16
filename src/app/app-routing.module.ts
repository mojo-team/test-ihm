import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./noyau/auth/AuthGuard";
import {HomeComponent} from "./home/home.component";
import {MapComponent} from "./map/map.component";
import {RetourLogin} from "./noyau/auth/RetourLogin";
import {RechercheComponent} from "./recherche/recherche.component";
import {ChatbotComponent} from "./chatbot/chatbot.component";
import {QuicksearchComponent} from "./quicksearch/quicksearch.component";
import {BookingComponent} from "./booking/booking.component";
import {AlerteComponent} from "./alerte/alerte.component";
import {SatisfactionComponent} from "./satisfaction/satisfaction.component";

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
    component: ChatbotComponent,
    path: 'chatbot',
    canActivate: [AuthGuard]
  },
  {
    component: QuicksearchComponent,
    path: 'quicksearch',
    canActivate: [AuthGuard]
  },
  {
    component: BookingComponent,
    path: 'booking',
    canActivate: [AuthGuard]
  },
  {
    component: AlerteComponent,
    path: 'alerte',
    canActivate: [AuthGuard]
  },
  {
    component: SatisfactionComponent,
    path: 'satisfaction',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
