import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:3000';

  constructor(private http: HttpClient) { }
  getOrders() {
    return this.http.get<any[]>(this.apiUrl+'/siparisler');
  }
  getItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`);
  }

  createItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/items`, item);
  }

  // Diğer HTTP istekleri ve işlevler buraya eklenebilir
}
