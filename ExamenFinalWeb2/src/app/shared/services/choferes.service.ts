import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chofer } from '../models/choferes';

@Injectable({
  providedIn: 'root',
})
export class ChoferesService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addChofer(chofer: Chofer): Observable<any> {
    const url = `${this.baseUrl}/choferes`;
    return this.http.post(url, chofer);
  }
}
