import { Component, OnInit } from '@angular/core';
import { DayI } from './interfaces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  chartParams: DayI;

  ngOnInit() {

  }

  getChartParams(params) {
    // console.log(params);
    return this.chartParams = params;
  }
}
