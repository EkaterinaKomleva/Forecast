import { Component, OnInit, Input } from '@angular/core';
import { DayI } from '../interfaces.service';
import { HighchartsService } from '../highcharts.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss']
})
export class TemperatureChartComponent implements OnInit {

  hours: string[] = [];
  temperature: number[] = [];

  constructor(private highchartsService: HighchartsService) { }

  @Input()
  set params(data: DayI) {
    if (data) {
      this.hours = data.time;
      this.temperature = data.temperature;
    }
  }
  get params() {
    // tslint:disable-next-line: no-debugger
    debugger;
    console.log(this.hours);
    return this.highchartsService.renderChart(this.hours, this.temperature);
  }

  ngOnInit() {
    Highcharts.chart('container', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Monthly Average Temperature'
      },
      subtitle: {
          text: 'Source: WorldClimate.com'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      yAxis: {
          title: {
              text: 'Temperature (°C)'
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5]
      }, {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6]
      }]
    });
  }
}
