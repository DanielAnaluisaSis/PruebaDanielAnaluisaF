import { Component } from '@angular/core';
import { Paises } from 'src/app/interfaces/pais-da.interfaces';
import { PaisesDaService } from 'src/app/services/paises-da.service';


@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent {
  regiones: string [] = ['europe','asia','america','africa','oceania'];

  regionActiva : string = "";
  paises : Paises[] = [];
 
  constructor(private paisesService : PaisesDaService){}
  
  getClaseCss(region : string){
   return(region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }
 
  actvarRegion(regiones : string){
   this.regionActiva = regiones;
   this.paisesService.buscarRegion(regiones)
   .subscribe(data=>{
     this.paises = data;
   })
  }
  
}
