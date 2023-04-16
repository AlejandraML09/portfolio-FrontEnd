import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioData } from '../model/portfoliodata';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http:HttpClient) {}

  getData():Observable<any> {
    return this.http.get("./assets/data/data.json");
  }
  getPortfolio(id:number):Observable<PortfolioData> {
  return this.http.get<PortfolioData>(`http://localhost:8080/persona/${id}`);
  
  }
}
