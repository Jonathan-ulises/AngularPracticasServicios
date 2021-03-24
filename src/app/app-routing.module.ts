// import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Paso 1: importar los componentes necearios
import { HomeComponent } from './home/home.component'; 
import { ZapatosComponent } from './zapatos/zapatos.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ContactoComponent } from './contacto/contacto.component';


//Paso 2:  Identificar nuestro array que contendra las rutas
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'zapatos', component: ZapatosComponent},
  {path: 'accesorios', component: AccesoriosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

//Paso 3: Exportar constantes
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
