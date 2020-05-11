import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SessionUserComponent } from './session-user/session-user.component';

import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { EntryComponent } from './entry/entry.component';
import { YorumComponent } from './yorum/yorum.component';
import {RegistrationComponent} from './registration/registration.component';
import { TopComponent } from './top/top.component';
import { SolframeComponent } from './solframe/solframe.component';
import { FooterComponent } from './footer/footer.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';


const routes: Routes = [
   /*{ path: '', pathMatch: 'full', redirectTo: ''},
    { path: 'login', component: LoginComponent}*/
  {path: 'entry', component: EntryComponent},
  {path: 'entry-details', component: EntryDetailsComponent},
  {path: 'yorum', component: YorumComponent},
  {path: 'yorum/:id', component: YorumComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SessionUserComponent,
    EntryComponent,
    YorumComponent,
    RegistrationComponent,
    TopComponent,
    SolframeComponent,
    FooterComponent,
    EntryDetailsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgbTypeaheadModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
