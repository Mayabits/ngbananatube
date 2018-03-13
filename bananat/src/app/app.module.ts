import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InsectionComponent } from './insection/insection.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';


@NgModule({
  declarations: [
    AppComponent,
    InsectionComponent,
    ContactoComponent,
    QuienessomosComponent,
    TerminosComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
