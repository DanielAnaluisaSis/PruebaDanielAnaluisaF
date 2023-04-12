import { Component } from '@angular/core';
import { GifsDAService } from '../../services/gifs-da.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get historial(){
    return this.gifsServices.historial;
  }

  constructor( private gifsServices: GifsDAService) {
    
  }

  BuscarGif(termino: string){
    this.gifsServices.buscarGifs(termino);
  }
}
