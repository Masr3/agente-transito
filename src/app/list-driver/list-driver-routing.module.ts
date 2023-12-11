import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDriverPage } from './list-driver.page';

const routes: Routes = [
  {
    path: '',
    component: ListDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDriverPageRoutingModule {}
