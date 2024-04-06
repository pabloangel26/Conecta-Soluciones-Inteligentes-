import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"/inicio",
    pathMatch:"full"
  },
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  }
];
