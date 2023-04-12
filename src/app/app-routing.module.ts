import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './gifs-da/pagina-principal/pagina-principal.component';
import { PaisComponent } from './paises-da/pais/pais.component';

import { RegionesComponent } from './paises-da/regiones/regiones.component';

const routes: Routes = [
  {path:'',component:PaginaPrincipalComponent,pathMatch:'full'},
  {path:'gifs',component:PaginaPrincipalComponent},
  {path:'paises',component:PaisComponent},
  {path:'regiones',component:RegionesComponent},
  {path:'**',redirectTo:'gifs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

