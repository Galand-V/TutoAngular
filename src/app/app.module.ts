import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFistCompComponent } from './my-fist-comp/my-fist-comp.component';
import { AppareilComponent } from './appareil/appareil.component';


import { AppareilService } from './service/appareil.service';
@NgModule({
  declarations: [
    AppComponent,
    MyFistCompComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
