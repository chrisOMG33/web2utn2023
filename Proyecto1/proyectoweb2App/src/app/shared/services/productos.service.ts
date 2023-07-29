import { Injectable } from '@angular/core';
import { Productos } from '../components/models/productos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Productos[]> {
    return this.http.get<Productos[]>('http://localhost:3000/productos');
  }
}
