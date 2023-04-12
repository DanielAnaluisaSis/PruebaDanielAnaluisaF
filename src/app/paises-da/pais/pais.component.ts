import { Component } from '@angular/core';
import { Paises } from 'src/app/interfaces/pais-da.interfaces';
import { PaisesDaService } from 'src/app/services/paises-da.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {
  error : boolean = false;
  public paises : Paises[] = [];

  constructor( private servicePais : PaisesDaService){

  }

  buscar( termino : string){
    this.error = false;
    this.servicePais.buscarPais(termino).subscribe(resp =>{
      console.log(resp);
      this.paises = resp;
    },(err)=>{
      this.error=true;
    })
  }

  sugerencias(termino:string ){
    this.error = false;
  }

}
