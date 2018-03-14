import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsectionComponent} from './insection/insection.component';
import {ContactoComponent} from './contacto/contacto.component';
import {QuienessomosComponent} from './quienessomos/quienessomos.component';
import {TerminosComponent} from './terminos/terminos.component';
import {PrivacidadComponent} from './privacidad/privacidad.component';
<<<<<<< HEAD
=======
import {RegistroComponent} from './registro/registro.component';
import {IniciosesionComponent} from './iniciosesion/iniciosesion.component';
import {RecuperapassComponent} from './recuperapass/recuperapass.component';
>>>>>>> noemi

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
<<<<<<< HEAD
=======
    },
    {
        path:'registro',
        component: RegistroComponent
    },
    {
        path:'iniciosesion',
        component:IniciosesionComponent
    },
    {
        path:'recuperapass',
        component:RecuperapassComponent
>>>>>>> noemi
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
