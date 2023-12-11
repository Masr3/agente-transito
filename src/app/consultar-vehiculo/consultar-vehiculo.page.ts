import { Component, OnInit } from '@angular/core';
import { MultaService } from '../multa.service';

@Component({
  selector: 'app-consultar-vehiculo',
  templateUrl: './consultar-vehiculo.page.html',
  styleUrls: ['./consultar-vehiculo.page.scss'],
})
export class ConsultarVehiculoPage  {

  placa:any
  constructor(private multaService:MultaService) { }
  flag:boolean = false
  vehiculo:any

  vehiculos:any = [
  {placa: "PL4C4T3S7", owner:"Juan Pedro",marca:"Hyundai Santa Fe", foto:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Hyundai_Santa_Fe_%28TM%29_PHEV_FL_IMG_6648.jpg", fecha: "12/3/2021", licencia:'T3032LN'},
  {placa: "PL4C4T4S72", owner:"Maria Santos",marca:"Chevrolet", foto:"https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP135/14ecb522a9aa4fd0a6361c455a07a8fc_ful.jpg", fecha: "5/6/2020", licencia: 'WQ032LMN'},

  {placa: "PL4C4T4S73", owner:"Daniel Carvajal",marca:"Rolls Royce", foto:"https://hips.hearstapps.com/hmg-prod/images/2024-rolls-royce-phantom-102-64bad70ba7661.jpg?crop=0.498xw:0.446xh;0.300xw,0.332xh&resize=1200:*", fecha: "22/3/2018", licencia: 'RQ032LMN'},

  {placa: "PL4C4T4S74", owner:"Lucia Vinci",marca:"Porche", foto:"https://topsevenluxurycars.al/wp-content/uploads/2022/01/IMG_8028-2-876x535.jpg", fecha: "9/9/2022", licencia: 'PQ032LMN'},

  {placa: "PL4C4T4S75", owner:"Amadis Suarez",marca:"Harley Davidson", foto:"https://img.corotos.com.do/variants/p0fbhv40ujgqp3g3n6b9eo4ltpdm/ce679ccb626c0538ddf96ae31cb4fe352a5677a9ff9b875ffd4f22fc9348637b", fecha: "12/3/2013", licencia:'XQ032LMN'},
  ]


  buscaVehiculo(){
    this.vehiculos.forEach((v:any) => {
      if (this.placa == v.placa){
        this.vehiculo = v
        console.log(v)
        this.flag = true;
      }
    });
  }


  findVehicle(){
    this.multaService.getMultaByPlaca(this.placa)
    .then(d=>console.log(d))
    .catch(e=>console.log(e))
  }


}
