import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { NgForm } from '@angular/forms';

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
  crearPelicula(form: NgForm){
    this.peliculaService.crearPelicula(form.value)
    .subscribe(
      res => {
        this.obtenerPeliculas();
        form.reset();
      },
      err => console.error(err)
    )
  }
  eliminarPelicula(id: string) {
    if (confirm('Are you sure you want to delete it?')){
      this.peliculaService.eliminarPelicula(id)
      .subscribe(
        (res) => {this.obtenerPeliculas}, 
        (err) => console.error(err))
    }
  }
}
