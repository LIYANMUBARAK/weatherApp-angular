import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temperatureConvertPipe'
})

export class TemperatureConvertPipe implements PipeTransform{
    
    transform(value: number):Number {
        return Math.floor(value-273.15)
    }
}