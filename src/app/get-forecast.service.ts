import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetForecastService {

  private cityId = '509820';  // надо ли все параметры так описывать?
  private celsius = 'metric';
  private myKey = '69a8a25ac72c1b683cf93ac166329be8';  // константу записывать большими буквами?
  private language = 'ru';
  // numberOfLines = '';

  constructor(private http: HttpClient) { }

  getForecast() {
    return this.http
      // tslint:disable-next-line: max-line-length
      .get(`http://api.openweathermap.org/data/2.5/forecast?id=${this.cityId}&units=${this.celsius}&lang=${this.language}&APPID=${this.myKey}`);
  }
}
