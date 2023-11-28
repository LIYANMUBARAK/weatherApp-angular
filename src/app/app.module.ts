import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component'
import {  ReactiveFormsModule } from '@angular/forms';
import { TemperatureConvertPipe } from './shared/temperatureConvert.pipe';
import { DateFormat } from './shared/dateFormat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TemperatureConvertPipe,
    DateFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
