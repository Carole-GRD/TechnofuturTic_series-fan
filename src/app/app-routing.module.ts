import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanListComponent } from './fan/pages/fan-list/fan-list.component';
// import { FanShowComponent } from './fan/pages/fan-show/fan-show.component';
// import { HomeComponent } from './fan/pages/home/home.component';

const routes: Routes = [
  { path: '', component: FanListComponent}, 
  // { path: 'fan', 
  //     component: FanListComponent,
  //     loadChildren: () => import('./fan/fan.module').then(m => m.FanModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
