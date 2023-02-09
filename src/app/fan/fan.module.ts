import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FanRoutingModule } from './fan-routing.module';

import { FanListComponent } from './pages/fan-list/fan-list.component';
import { FanShowComponent } from './pages/fan-show/fan-show.component';
import { HomeComponent } from './pages/home/home.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FanListComponent,
    FanShowComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FanRoutingModule,
    // RouterModule
  ],
  exports: [
    FanListComponent,
    FanShowComponent,
    HomeComponent,
  ],
})
export class FanModule { }
