import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prestamo } from '../models/prestamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private URL = 'http://localhost:4000/api/prestamos/';
  
  constructor(private http: HttpClient) { }

  crearPrestamo(prestamo: prestamo): Observable<any> {
    return this.http.post(this.URL, prestamo);
  }

  obtenerPrestamos(): Observable<any> {
    return this.http.get<prestamo[]>(this.URL);
  }

  obtenerPrestamo(id?: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  devolverPrestamo(id: string, prestamo: prestamo): Observable<any> {
    return this.http.put(this.URL + id, prestamo);
  }

  eliminarPrestamoHecho(id:string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}


