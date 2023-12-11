import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMultasPageRoutingModule } from './list-multas-routing.module';

import { ListMultasPage } from './list-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMultasPageRoutingModule
  ],
  declarations: [ListMultasPage]
})
export class ListMultasPageModule {}
