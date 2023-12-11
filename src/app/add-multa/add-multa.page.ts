import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MultaService } from '../multa.service';
import { Multa } from '../models/Multa';
import {Storage, ref, uploadBytes} from '@angular/fire/storage'
@Component({
  selector: 'app-add-multa',
  templateUrl: './add-multa.page.html',
  styleUrls: ['./add-multa.page.scss'],
})
export class AddMultaPage implements OnInit {

  formulario:FormGroup;

  multa: Multa = {
    cedulaInfractor: '',
    placaVehiculo: '',
    motivo: '',
    evidenciaFotoUrl: '',
    comentario: '',
    urlNotaVoz: '',
    latitud: 0,
    longitud: 0,
    fecha: new Date(),
    hora: '',
  };




  constructor(private multasService:MultaService, private storage:Storage) {
    this.formulario = new FormGroup(
      {
        cedulaInfractor: new FormControl(),
        placaVehiculo: new FormControl(),
        motivo: new FormControl(),
        evidenciaFotoUrl: new FormControl(),
        comentario: new FormControl(),
        urlNotaVoz: new FormControl(),
        latitud: new FormControl(),
        longitud: new FormControl(),
        fecha: new FormControl(),
        hora: new FormControl(),
      }
    )
  }

  
  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.multasService.addMulta(this.formulario.value)
    console.log(response)
  }

  uploadImage($event:any){
    const file = $event.target.files[0]
      console.log(file)
      const imgRef = ref(this.storage, `evidencia/${file.name}`)

      uploadBytes(imgRef, file)
      .then(res=> console.log(res))
      .catch(err=> console.log(err))
  }


  ngOnInit() {
    console.log("Estoy aqui");
    
  }

}
