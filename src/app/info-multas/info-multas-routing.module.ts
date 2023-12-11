import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMultasPage } from './info-multas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMultasPageRoutingModule {}
