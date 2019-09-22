import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';

import { GetForecastService } from './get-forecast.service';
import { InterfacesService } from './interfaces.service';
import { HighchartsService } from './highcharts.service';

@NgModule({
  declarations: [
    AppComponent,
    FormSelectComponent,
    TemperatureChartComponent,
    HumidityChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [GetForecastService, InterfacesService, HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
