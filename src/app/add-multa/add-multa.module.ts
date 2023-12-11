import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMultaPageRoutingModule } from './add-multa-routing.module';

import { AddMultaPage } from './add-multa.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddMultaPageRoutingModule
  ],
  declarations: [AddMultaPage]
})
export class AddMultaPageModule {}
