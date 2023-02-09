import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FanModule } from './fan/fan.module';
// import { HomeComponent } from './fan/pages/home/home.component';
// import { FanListComponent } from './fan/pages/fan-list/fan-list.component';
// import { FanShowComponent } from './fan/pages/fan-show/fan-show.component';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // FanListComponent,
    // FanShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FanModule
    // RouterModule
  ],
  // exports: [
  //   HomeComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
