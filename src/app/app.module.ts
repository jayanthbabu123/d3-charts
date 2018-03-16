import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchatComponent } from './barchat/barchat.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import {AppRoutingModule} from './app.routing.module';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchatComponent,
    DonutChartComponent,
    MultiLineChartComponent,
    MultiBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
