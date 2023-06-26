import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { socio } from '../models/socio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  
  private URL = 'http://localhost:4000/api/Socios/';
  
  constructor(private http: HttpClient) { }

  crearSocio(socio: socio): Observable<any> {
    return this.http.post(this.URL, socio);
  }

  obtenerSocios(): Observable<any> {
    return this.http.get(this.URL);
  }

  obtenerSocio(id?: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  actualizarSocio(id: string, socio: socio): Observable<any> {
    return this.http.put(this.URL + id, socio);
  }

  eliminarSocio(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}
