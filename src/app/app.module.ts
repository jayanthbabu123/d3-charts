import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchatComponent } from './barchat/barchat.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import {AppRoutingModule} from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchatComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
