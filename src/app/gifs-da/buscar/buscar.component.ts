import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsDAService } from 'src/app/services/gifs-da.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

@ViewChild('txtTermino') txtTermino!: ElementRef<HTMLInputElement>;

  constructor( private gifsServices : GifsDAService){}

  buscar() {
    const valor = this.txtTermino.nativeElement.value;
    if( valor.trim().length === 0){
      return;
    }
    this.txtTermino.nativeElement.value = '';

    this.gifsServices.buscarGifs(valor);
  }
}