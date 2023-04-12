import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ImagenesComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BuscarComponent,
    ImagenesComponent,
    PaginaPrincipalComponent,
  ]
})
export class GifsDAModule { }
