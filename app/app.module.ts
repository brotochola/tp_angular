import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { J1Component } from './j1/j1.component';
import { J2Component } from './j2/j2.component';
import { J3Component } from './j3/j3.component';
import { J4Component } from './j4/j4.component';
import { J5Component } from './j5/j5.component';
import { RankingComponent } from './ranking/ranking.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as $ from 'jquery/dist/jquery.min.js';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    J1Component,
    J2Component,
    J3Component,
    J4Component,
    J5Component,
    RankingComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
