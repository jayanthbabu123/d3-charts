import { Component } from '@angular/core';
import { lineChart, barData, donutData } from './example';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lineChart = lineChart.chartData.lineGraphData;
  barData = barData.chartData.barChartData;
  donutData = donutData;
}
