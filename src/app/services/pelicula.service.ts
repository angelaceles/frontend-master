import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  private URL = 'http://localhost:4000/api/peliculas/';
  
  pelicula: pelicula[] = [];

  
  constructor(private http: HttpClient) { }

  crearPelicula() {}

  obtenerPeliculas() {
    return this.http.get<pelicula[]>(this.URL);
  }

  obtenerPelicula() {}

  actualizarPelicula() {}

  eliminarPelicula() {}
}
