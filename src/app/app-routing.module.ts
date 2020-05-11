import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EntryComponent} from './entry/entry.component';
import {YorumComponent} from './yorum/yorum.component';
import {RegistrationComponent} from './registration/registration.component';

import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {TopComponent} from './top/top.component';
import {EntryDetailsComponent} from './entry-details/entry-details.component';



const routes: Routes = [

  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
 {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},

   {path: 'entry', component: EntryComponent},
   {path: 'entryDetail/:id', component: EntryDetailsComponent},
  {path: 'yorum/:id', component: YorumComponent},
   // {path: 'yorum', component: YorumComponent},

  {path: 'register', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
