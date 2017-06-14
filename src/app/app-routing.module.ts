import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        component: LoginComponent,
        path: 'login'
      },
      {
        component: MessagesComponent,
        path: 'messages'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
