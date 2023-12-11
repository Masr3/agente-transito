import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarVehiculoPage } from './consultar-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarVehiculoPageRoutingModule {}
