import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDriverPageRoutingModule } from './list-driver-routing.module';

import { ListDriverPage } from './list-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDriverPageRoutingModule
  ],
  declarations: [ListDriverPage]
})
export class ListDriverPageModule {}
