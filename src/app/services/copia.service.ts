import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { copia } from '../models/copia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CopiaService {

  private URL = 'http://localhost:4000/api/copias/';
  
  constructor(private http: HttpClient) { }

  crearCopia(copia: copia): Observable<any> {
    return this.http.post(this.URL, copia);
  }

  obtenerCopias(): Observable<any> {
    return this.http.get(this.URL);
  }

  eliminarCopia(id:string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}
