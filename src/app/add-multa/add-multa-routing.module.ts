import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMultaPage } from './add-multa.page';

const routes: Routes = [
  {
    path: '',
    component: AddMultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMultaPageRoutingModule {}
