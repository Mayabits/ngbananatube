import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsectionComponent} from './insection/insection.component';

const routes: Routes = [
    {
        path:'',
        component: InsectionComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
