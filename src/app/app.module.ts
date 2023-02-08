import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './fan/pages/home/home.component';
import { FanListComponent } from './fan/pages/fan-list/fan-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
