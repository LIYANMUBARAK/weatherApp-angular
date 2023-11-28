import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weatherdata } from 'src/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  
  constructor(private http:HttpClient ) { }

  private readonly apiUrl =  'https://api.openweathermap.org/data/2.5/forecast'
  
  private readonly apiKey = '247f612e81e95576f7ccaa5d4b81ef34'

  getWeather(cityName:string):Observable<Weatherdata>{
    return this.http.get<Weatherdata>(`${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`)
  }
}
