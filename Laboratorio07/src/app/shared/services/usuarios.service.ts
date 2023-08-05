import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>('http://localhost:3000/usuarios');
  }
  guardar(usuarios: Usuarios): Observable<Usuarios> {
    return this.http
      .post<Usuarios>('http://localhost:3000/usuarios', usuarios)
      .pipe(catchError(this.handlerError));
  }
  modificar(usuarios: Usuarios): Observable<Usuarios> {
    return this.http
      .patch<Usuarios>('http://localhost:3000/usuarios', usuarios)
      .pipe(catchError(this.handlerError));
  }

  eliminar(cedula: number): Observable<Usuarios> {
    return this.http
      .delete<Usuarios>('http://localhost:3000/usuarios/' + cedula)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: any): Observable<never> {
    console.log(error);
    return throwError(error);
  }
}
