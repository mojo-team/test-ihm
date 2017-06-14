import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MessagesComponent} from "./messages/messages.component";
import {AuthGuard} from "./auth/AuthGuard";

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
        path: 'messages',
        canActivate: [AuthGuard]
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
