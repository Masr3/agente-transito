import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage  {

  apiKey= "14b65fc356511e4c2393534563f2b978"
  constructor(private http:HttpClient) { }

  clima:any = null

  lat = 0
  lon = 0
  showClimate = false

  getClimate(){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`)
    .subscribe((data:any)=>{
      this.clima = data
    })
    console.log(this.clima)
    this.showClimate = true
  }


 

}
