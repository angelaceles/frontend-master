import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  constructor(public peliculaService: PeliculaService){}

  ngOnInit(){
    this.obtenerPeliculas();
  }

  obtenerPeliculas(){
    this.peliculaService.obtenerPeliculas()
    .subscribe(
      res => {
        this.peliculaService.pelicula = res;
      },
      err => console.error(err)
    )
  }
}
