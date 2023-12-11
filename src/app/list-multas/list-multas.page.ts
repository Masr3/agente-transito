import { Component, OnInit } from '@angular/core';
import { MultaService } from '../multa.service';

@Component({
  selector: 'app-list-multas',
  templateUrl: './list-multas.page.html',
  styleUrls: ['./list-multas.page.scss'],
})
export class ListMultasPage implements OnInit {

  multas:any
  constructor(private multaService:MultaService) { }

   ngOnInit() {
    this.multaService.getMultas().subscribe((data)=>{
      this.multas = data
      console.log(this.multas)
    })
  }

  

}
