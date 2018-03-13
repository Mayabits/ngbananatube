import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InsectionComponent } from './insection/insection.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoliticaprivacidadComponent } from './politicaprivacidad/politicaprivacidad.component';
import { TerminosycondicionesComponent } from './terminosycondiciones/terminosycondiciones.component';



@NgModule({
  declarations: [
    AppComponent,
    InsectionComponent,
    ContactoComponent,
    PoliticaprivacidadComponent,
    TerminosycondicionesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
