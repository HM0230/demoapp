import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'
import {JsonpModule} from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Page01Component} from './components/page01/page01.component'
import {Page02Component} from './components/page02/page02.component'
import {Page03Component} from './components/page03/page03.component';
import { SonCompComponent } from './components/page01/son-comp/son-comp.component';
import { SonCompTwoComponent } from './components/page01/son-comp-two/son-comp-two.component';

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    Page02Component,
    Page03Component,
    SonCompComponent,
    SonCompTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
