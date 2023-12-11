// list-driver.page.ts
import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../conductor.service';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.page.html',
  styleUrls: ['./list-driver.page.scss'],
})
export class ListDriverPage  {

  licencia: string = '';
  flag: boolean = false;
  conductores: any[] = [];
  conductor: any;

  constructor(private conductoreService: ConductorService) { }



  arrConductores = [
    {
      "foto": "https://randomuser.me/api/portraits/men/87.jpg",
      "nombre": "Juan",
      "apellido": "Pérez",
      "fechaNacimiento": "10/05/1980",
      "direccion": "Calle 123, Ciudad XYZ",
      "telefono": "809-123-4567",
      "licencia": "ABC123"
    },
    {
      "foto": "https://randomuser.me/api/portraits/women/88.jpg",
      "nombre": "María",
      "apellido": "Gómez",
      "fechaNacimiento": "15/08/1992",
      "direccion": "Avenida Principal, Pueblo ABC",
      "telefono": "829-234-5678",
      "licencia": "DEF456"
    },
    {
      "foto": "https://randomuser.me/api/portraits/men/35.jpg",
      "nombre": "Carlos",
      "apellido": "Rodríguez",
      "fechaNacimiento": "22/03/1985",
      "direccion": "Calle 456, Ciudad DEF",
      "telefono": "809-345-6789",
      "licencia": "GHI789"
    },
    {
      "foto": "https://randomuser.me/api/portraits/women/30.jpg",
      "nombre": "Laura",
      "apellido": "Martínez",
      "fechaNacimiento": "05/11/1977",
      "direccion": "Avenida Secundaria, Pueblo GHI",
      "telefono": "829-456-7890",
      "licencia": "JKL012"
    },
    {
      "foto": "https://randomuser.me/api/portraits/men/80.jpg",
      "nombre": "Javier",
      "apellido": "López",
      "fechaNacimiento": "18/09/1990",
      "direccion": "Calle 789, Ciudad JKL",
      "telefono": "809-567-8901",
      "licencia": "MNO345"
    }
  ]

  buscaConductor() {
    this.arrConductores.forEach((v: any) => {
      if (this.licencia == v.licencia) {
        this.conductor = v;
        console.log(v);
        this.flag = true;
        return v;
      }
    });
  }
  

  
}
