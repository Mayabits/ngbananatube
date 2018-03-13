import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsectionComponent} from './insection/insection.component';
import {ContactoComponent} from './contacto/contacto.component';
import {QuienessomosComponent} from './quienessomos/quienessomos.component';
import {TerminosComponent} from './terminos/terminos.component';
import {PrivacidadComponent} from './privacidad/privacidad.component';

const routes: Routes = [
    {
        path:'',
        component: InsectionComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'quienessomos',
        component: QuienessomosComponent
    },
    {
        path: 'terminos',
        component: TerminosComponent
    },
    {
        path: 'privacidad',
        component: PrivacidadComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
