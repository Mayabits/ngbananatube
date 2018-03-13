import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsectionComponent } from "./insection/insection.component";
import { QuienessomosComponent } from "./quienessomos/quienessomos.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { PoliticaprivacidadComponent } from "./politicaprivacidad/politicaprivacidad.component";
import { TerminosycondicionesComponent } from "./terminosycondiciones/terminosycondiciones.component";

const routes: Routes = [
  {
    path: '',
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
    path: 'politicaprivacidad',
    component: QuienessomosComponent
  },
    {
    path: 'terminosycondiciones',
    component: QuienessomosComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 

 


 
