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
import {AuthGuard} from "./auth/AuthGuard";
import {MapComponent } from './map/map.component';

import {MapService} from './map/map.service'
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
    MapComponent
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
  providers: [AuthGuard,MapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
