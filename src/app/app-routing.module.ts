import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrentforecastComponent} from './currentforecast/currentforecast.component';
import {HourlyforecastComponent} from './hourlyforecast/hourlyforecast.component';
import {TendayforecastComponent} from './tendayforecast/tendayforecast.component';

const routes: Routes = [
  {path: 'current', component: CurrentforecastComponent},
  {path: 'hourly', component: HourlyforecastComponent},
  {path: '10day', component: TendayforecastComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
