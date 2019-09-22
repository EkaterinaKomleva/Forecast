import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  constructor() { }

  renderChart(hours, another) {
    // console.log(hours);
    // return () => {
    //   const highcharts: typeof Highcharts = Highcharts;
    //   const chartOptions = {
    //     chart: {
    //       type: 'spline'
    //     },
    //     title: {
    //       text: 'Средняя дневная температура'
    //     },
    //     subtitle: {
    //       text: 'Source: openweathermap.org'
    //     },
    //     xAxis: {
    //       categories: another
    //     },
    //     yAxis: {
    //       title: {
    //         text: 'Температура °C'
    //       }
    //     },
    //     tooltip: {
    //       valueSuffix: ' °C'
    //     },
    //     series: [
    //       {
    //         name: 'Петрозаводск',
    //         data: hours /* as Highcharts.SeriesLineDataOptions */
    //       }
    //     ]
    //   };
    // };
  // }

    const chart =  Highcharts.chart('container', {
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
          categories: hours
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
          data: another
      }, {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });
    return chart;
  }
}

