import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMultasPage } from './list-multas.page';

const routes: Routes = [
  {
    path: '',
    component: ListMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMultasPageRoutingModule {}
