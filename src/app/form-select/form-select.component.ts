import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetForecastService } from '../get-forecast.service';
import { ResponseI, DayI } from '../interfaces.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {

  day: DayI | null = {
    date: '',
    time: [],
    temperature: [],
    humidity: [],
    order: 0
  };

  params: DayI[] = [];
  paramsForChart: DayI;

  @Output() chartParams = new EventEmitter<DayI>();

  constructor(private getForecastService: GetForecastService) { }

  ngOnInit() {  // перенести логикув app-component
    this.getForecastService.getForecast()
      .subscribe((response: ResponseI) => this.getForecastParams(response.list));
  }

  getForecastParams(data) {
    this.day.date = this.getDate(data[0].dt_txt);

    data.forEach(item => {
      if (this.day.date !== this.getDate(item.dt_txt)) {
        this.day.order += 1;
        this.params.push(this.day);
        const json = JSON.stringify(this.day);
        this.day = JSON.parse(json);
        this.day.date = this.getDate(item.dt_txt);
        this.day.time = [];
        this.day.temperature = [];
        this.day.humidity = [];
      }
      this.day.time.push(this.getTime(item.dt_txt));
      this.day.temperature.push(item.main.temp);
      this.day.humidity.push(item.main.humidity);
    });
    // console.log(this.params);
    this.chartParams.emit(this.params[0]);
    return this.params;
  }

  getDate(item) {
    return moment.utc(item).utcOffset(180).format('LLL').split(', ')[0];
  }

  getTime(item) {
    return moment.utc(item).utcOffset(180).format().slice(11, 16);
  }

  onSelectClick(selectElem: HTMLSelectElement) {
    this.getParamsForChart(selectElem.value);
    this.chartParams.emit(this.paramsForChart);
  }

  getParamsForChart(order) {
    // console.log(this.params[order - 1]);
    return this.paramsForChart = this.params[order - 1];
  }
}
