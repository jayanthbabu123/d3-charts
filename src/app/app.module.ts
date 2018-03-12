import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchatComponent } from './barchat/barchat.component';



@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
