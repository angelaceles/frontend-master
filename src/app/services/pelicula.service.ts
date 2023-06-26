import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../models/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  private URL = 'http://localhost:4000/api/peliculas/';
  
  constructor(private http: HttpClient) { }

  crearPelicula(pelicula: pelicula): Observable<any> {
    return this.http.post(this.URL, pelicula);
  }

  obtenerPeliculas(): Observable<any> {
    return this.http.get(this.URL);
  }

  obtenerPelicula(id?: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  actualizarPelicula(id: string, pelicula: pelicula): Observable<any> {
    return this.http.put(this.URL + id, pelicula);
  }

  eliminarPelicula(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}
