import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanListComponent } from './pages/fan-list/fan-list.component';
import { FanShowComponent } from './pages/fan-show/fan-show.component';
import { HomeComponent } from './pages/home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent, children: [ 
//     {path: 'fan', component: FanListComponent}]   
//   },
//   // { path: 'fan', component: FanListComponent },
//   { path: ':name', 
//       component: FanShowComponent },
// ];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fan', component: FanListComponent },
  { path: 'fan/:name', component: FanShowComponent }
  // { path: 'fan', component: FanListComponent, children: [
  //   { path: 'fan/:name', component: FanShowComponent }
  // ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FanRoutingModule { }
