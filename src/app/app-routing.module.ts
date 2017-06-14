import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MessagesComponent} from "./messages/messages.component";
import {AuthGuard} from "./auth/AuthGuard";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      component: LoginComponent,
      path: 'login',
      pathMatch: 'full'
    },
    {
      component: MessagesComponent,
      path: 'messages',
      pathMatch: 'full',
      canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
