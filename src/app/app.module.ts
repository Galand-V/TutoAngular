import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MyFistCompComponent } from './my-fist-comp/my-fist-comp.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {SingleAppareilComponent } from './single-appareil/single-appareil.component'

import { AppareilService } from './service/appareil.service';
import { AuthService } from './service/auth.service';


const appRoutes: Routes = [
  {path:'appareils', component:AppareilViewComponent},
  {path:'auth', component:AuthComponent},
  {path:'appareils/:id', component:SingleAppareilComponent},
  {path:'', component:AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyFistCompComponent,
    AppareilComponent,
    AuthComponent,
    SingleAppareilComponent,
    AppareilViewComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
