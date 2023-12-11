import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarVehiculoPageRoutingModule } from './consultar-vehiculo-routing.module';

import { ConsultarVehiculoPage } from './consultar-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarVehiculoPageRoutingModule
  ],
  declarations: [ConsultarVehiculoPage]
})
export class ConsultarVehiculoPageModule {}
