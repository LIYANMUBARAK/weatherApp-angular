import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component'
import {  ReactiveFormsModule } from '@angular/forms';
import { TemperatureConvertPipe } from './shared/temperatureConvert.pipe';
import { DateFormat } from './shared/dateFormat.pipe';
import { environment } from 'src/environments/environment';
import { interceptor } from './shared/interceptor/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:interceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
