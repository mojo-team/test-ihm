import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";

import {AppRoutingModule} from "./app-routing.module";

import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./noyau/auth/AuthGuard";
import {MapComponent} from "./map/map.component";
import {TestComponent} from "./test/test.component";

import {RecommandationService} from './recommandation/recommandation.service'
import {MapService} from "./map/map.service";
import {RetourLogin} from "./noyau/auth/RetourLogin";
import {ResultatComponent} from "./reservation/resultat/resultat.component";
import {ServicesComponent} from "./reservation/services/services.component";
import {ConfirmationComponent} from "./reservation/confirmation/confirmation.component";
import {SalleComponent} from "./reservation/salle/salle.component";
import {CardSliderComponent} from "./home/card-slider/card-slider.component";
import {NavbarComponent} from "./noyau/navbar/navbar.component";

export const firebaseConfig = {
  apiKey: "AIzaSyCvjEn9dqAMZGbnCVa5lMBTVnLJzNbvdl8",
  authDomain: "mojopeinc.firebaseapp.com",
  databaseURL: "https://mojopeinc.firebaseio.com",
  projectId: "mojopeinc",
  storageBucket: "mojopeinc.appspot.com",
  messagingSenderId: "445519055003"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    CardSliderComponent,
    ResultatComponent,
    ServicesComponent,
    ConfirmationComponent,
    SalleComponent,
    NavbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard,RetourLogin, MapService,RecommandationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
