import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { PaisComponent } from './pais/pais.component';
import { RegionesComponent } from './regiones/regiones.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { TablaComponent } from './componentes/tabla/tabla.component';


@NgModule({
  declarations: [
    PaisComponent,
    RegionesComponent,
    BuscarComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[
    PaisComponent,
    RegionesComponent,
    BuscarComponent,
    TablaComponent
  ]
})

export class PaisesDAModule { }
