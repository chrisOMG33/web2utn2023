import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Estudiantes } from '../models/estudiantes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Estudiantes[]> {
    return this.http
      .get<Estudiantes[]>('http://localhost:3000/estudiantes')
      .pipe(catchError(this.handlerError));
  }
  guardar(estudiante: Estudiantes): Observable<Estudiantes> {
    return this.http
      .post<Estudiantes>('http://localhost:3000/estudiantes', estudiante)
      .pipe(catchError(this.handlerError));
  }
  modificar(estudiante: Estudiantes): Observable<Estudiantes> {
    console.log('Hola, soy el estudiante.');
    console.log(estudiante);
    return this.http
      .patch<Estudiantes>('http://localhost:3000/estudiantes', estudiante)
      .pipe(catchError(this.handlerError));
  }

  eliminar(id: number): Observable<Estudiantes> {
    return this.http
      .delete<Estudiantes>('http://localhost:3000/estudiantes/' + id)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: HttpErrorResponse) {
    let mensaje = 'Error desconocido, reporte al adminstrador.';

    if (error?.error) {
      mensaje = error?.error?.mensaje;
    }

    return throwError(() => new Error(mensaje));
  }
}
