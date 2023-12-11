import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule, ReactiveFormsModule,FormsModule,GoogleMapsModule ,IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp(environment.firebase  )), provideStorage(() => getStorage())],
  providers: [AuthGuard,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
