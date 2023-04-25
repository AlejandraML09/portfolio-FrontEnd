import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { backendUrl } from 'src/globals';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(backendUrl + '/auth/login', { username, password });
  }

  register(username: string, password: string) {
    return this.http.post<any>(backendUrl + '/auth/register', { username, password });
  }

}
