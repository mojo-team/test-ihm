import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";

import {AppRoutingModule} from './app-routing.module';

import {LoginComponent} from './login/login.component';
import {MessagesComponent} from './messages/messages.component';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./noyau/auth/AuthGuard";
import {MapComponent } from './map/map.component';

import {MapService} from './map/map.service'
import {RetourLogin} from "./noyau/auth/RetourLogin";
import { RechercheComponent } from './recherche/recherche.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BookingComponent } from './booking/booking.component';
import { QuicksearchComponent } from './quicksearch/quicksearch.component';
import { AlerteComponent } from './alerte/alerte.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { NavbarComponent } from './noyau/navbar/navbar.component';
import { CardSliderComponent } from './home/card-slider/card-slider.component';

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
    MessagesComponent,
    MapComponent,
    RechercheComponent,
    ChatbotComponent,
    BookingComponent,
    QuicksearchComponent,
    AlerteComponent,
    SatisfactionComponent,
    NavbarComponent,
    CardSliderComponent
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
  providers: [AuthGuard,RetourLogin, MapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
