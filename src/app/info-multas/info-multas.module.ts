import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoMultasPageRoutingModule } from './info-multas-routing.module';

import { InfoMultasPage } from './info-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoMultasPageRoutingModule
  ],
  declarations: [InfoMultasPage]
})
export class InfoMultasPageModule {}
