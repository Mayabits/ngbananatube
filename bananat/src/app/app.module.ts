import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InsectionComponent } from './insection/insection.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RecuperapassComponent } from './recuperapass/recuperapass.component';


@NgModule({
  declarations: [
    AppComponent,
    InsectionComponent,
    ContactoComponent,
    QuienessomosComponent,
    TerminosComponent,
    PrivacidadComponent,
    RegistroComponent,
    IniciosesionComponent,
    RecuperapassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
