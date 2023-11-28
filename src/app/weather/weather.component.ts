import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,ReactiveFormsModule,NgModel} from '@angular/forms';
import { Weatherdata } from 'src/models/weather.model';
import { WeatherAppService } from 'src/services/weather-app.service';
import { TemperatureConvertPipe } from '../shared/temperatureConvert.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  
  weatherData !: Weatherdata
  Day!:string
  Time!:string
  temperature!:number
  dailyTemperatures: { dateKey: string; dailyTemp: number }[] = [];


  constructor(private service:WeatherAppService,
              private fb:FormBuilder,
              ){}

  ngOnInit(): void {
    this.city.get('cityName')!.setValue('kochi')
 this.onSubmit()
  }

  city=this.fb.group({
    cityName:['']
  })

  formatDate(inputDate:Date) {
    const date = new Date(inputDate);
  
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
  
    this.Day = dayOfWeek
    this.Time = formattedTime
  }


  onSubmit(){
    
    this.service.getWeather(this.city.value.cityName as string).subscribe((response)=>{
      
      this.weatherData = response
      this.temperature = (this.weatherData.list[0].main.temp-273.15)
      this.dailyTemperatures = []
      this.calculateDailyTemperatures()
    })
  }

  get weatherCondition():string{
    if(this.temperature<0) return 'ice'
    if(this.temperature<10) return 'ice'
    if(this.temperature<20) return 'cold'
    if(this.temperature<30) return 'chill'
    return 'hot'
  }

   get weatherImageSrc():string{
    return `assets/${this.weatherCondition}.png`
  }

  calculateDailyTemperatures() {
    const temperatureMap = new Map<string, number>(); // Change the map value type to number
  
    for (const weatherEntry of this.weatherData.list) {
      const dateKey = weatherEntry.dt_txt.split(' ')[0]; // Extract date part
      const temperature = weatherEntry.main.temp;
  
      // Check if the entry exists, if not, create it
      if (!temperatureMap.has(dateKey)) {
        temperatureMap.set(dateKey, temperature);
      }
    }
  
    temperatureMap.forEach((temperature, dateKey) => {
      this.dailyTemperatures.push({ dateKey, dailyTemp: temperature }); // Use dailyTemp instead of dailyAvgTemp
    });
  }

}
