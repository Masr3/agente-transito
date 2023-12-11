import { Component, OnInit } from '@angular/core';
import { MultaService } from '../multa.service';
import { Marker } from '../models/Marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  markers:Marker[] = []
  constructor(private multaService:MultaService) { }

  ngOnInit() {
    this.multaService.getMultas().subscribe((data:any)=>{
        data.forEach((e:any)=>{

          let m:Marker = {lat: e.latitud, lng: e.longitud}

          this.markers.push(m)
        })
    })
console.log(this.markers)

  }

}
