import { Component } from '@angular/core';
import { GifsDAService } from 'src/app/services/gifs-da.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {
  constructor( private gifsService :GifsDAService){}

  get resultados() {
  return this.gifsService.resultados;
  }

}
