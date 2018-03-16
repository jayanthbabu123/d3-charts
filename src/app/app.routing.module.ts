import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarchatComponent } from './barchat/barchat.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import  {MultiLineChartComponent} from './multi-line-chart/multi-line-chart.component'
import  {MultiBarChartComponent} from './multi-bar-chart/multi-bar-chart.component'
const appRoutes: Routes = [
  { path: '', component: BarchatComponent , pathMatch: 'full'},
  {
    path: 'line-chart',
    component: LinechartComponent,
  },
  {
    path: 'donut-chart',
    component: DonutChartComponent
  },
  {
    path: 'multi-line-chart',
    component: MultiLineChartComponent
  },
  {
    path:'multi-bar-chart',
    component: MultiBarChartComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }