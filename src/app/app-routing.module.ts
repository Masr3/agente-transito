import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'info-multas',
    loadChildren: () => import('./info-multas/info-multas.module').then( m => m.InfoMultasPageModule)
  },
  {
    path: 'add-multa',
    loadChildren: () => import('./add-multa/add-multa.module').then( m => m.AddMultaPageModule)
  },
  {
    path: 'list-multas',
    loadChildren: () => import('./list-multas/list-multas.module').then( m => m.ListMultasPageModule)
  },
  {
    path: 'list-driver',
    loadChildren: () => import('./list-driver/list-driver.module').then( m => m.ListDriverPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'consultar-vehiculo',
    loadChildren: () => import('./consultar-vehiculo/consultar-vehiculo.module').then( m => m.ConsultarVehiculoPageModule)
  },
  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
