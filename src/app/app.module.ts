import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';

//importamos  nuestra clase de routin
import { routing, AppRoutingProviders } from './app-routing.module';

//Vamos a importar nuestro modulo httpClient
import { HttpClientModule } from '@angular/common/http'; 

//importar las directivas para usar formularios de anguñar
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZapatosComponent,
    AccesoriosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    //Importamos el modulo para poderlo utilizar
    HttpClientModule,
    FormsModule
    // AppRoutingModule
  ],
  providers: [
    //Cargar nuestro proveedor de rutas
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
