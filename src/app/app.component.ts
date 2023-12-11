import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Multas En RD', url: '/info-multas', icon: 'warning' },
    { title: 'Agregar Multa', url: '/add-multa', icon: 'archive' },
    {title: 'Ver conductores', url: '/list-driver', icon:'person'},
    {title: 'Consultar Vehiculo', url:'consultar-vehiculo', icon:'car'},
    {title:"Lista de Multas", url:'list-multas',icon:'List' },
    {title: "Mapa de multas", url: 'map', icon:'Map'},
    {title:"Noticias", url:'noticias', icon:'newspaper'},
    {title:"Clima", url:'clima', icon:'cloud' },
    {title: 'Horoscopo', url:'horoscopo', icon:'star'}
    
  ];

  constructor() {}
}
