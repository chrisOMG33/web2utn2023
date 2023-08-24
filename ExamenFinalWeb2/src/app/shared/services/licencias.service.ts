import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Licencias } from '../models/licencias';
@Injectable({
  providedIn: 'root',
})
export class LicenciasService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllLicencias(): Observable<Licencias[]> {
    return this.http.get<Licencias[]>(`${this.baseUrl}/licencia`);
  }
}
