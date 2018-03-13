import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchatComponent } from './barchat/barchat.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchatComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
