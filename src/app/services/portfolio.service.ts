import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion, Experiencia, PortfolioData, Project, Skills } from '../model/portfoliodata';
import { backendUrl } from 'src/globals';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http:HttpClient) {}

  getData():Observable<any> {
    return this.http.get("./assets/data/data.json");
  }

  getPortfolio(id:number):Observable<PortfolioData> {
  return this.http.get<PortfolioData>(`${backendUrl}/persona/${id}`);
  }

  editPortfolio(id:number, portfolioData:PortfolioData): Observable<any> {
    return this.http.put<PortfolioData>(`${backendUrl}/persona/${id}`, portfolioData);
  }

  getPortfolioList(): Observable<PortfolioData[]> {
    return this.http.get<PortfolioData[]>(`${backendUrl}/persona`);

  }

  deleteExperience(userId:number, experienciaId:number) {
    return this.http.delete(`${backendUrl}/persona/${userId}/experiencia/${experienciaId}`)

  }

  deleteEducacion (userId:number, educacionId:number) {
    return this.http.delete(`${backendUrl}/persona/${userId}/educacion/${educacionId}`)

  }

  deleteSkill (userId:number, skillId:number) {
    return this.http.delete(`${backendUrl}/persona/${userId}/skill/${skillId}`)

  }

  deleteProject (userId:number, proyectoId:number) {
    return this.http.delete(`${backendUrl}/persona/${userId}/proyecto/${proyectoId}`)

  }


  addExperience(id:number, experiencia:Experiencia):Observable<any> {
    return this.http.post<any>(backendUrl + `/persona/${id}/experiencia`,  experiencia )
  }

  addEducacion(id:number, educacion:Educacion):Observable<any> {
    return this.http.post<any>(backendUrl + `/persona/${id}/educacion`,  educacion )
  }

  addSkill (id:number, skill:Skills):Observable<any> {
    return this.http.post<any>(backendUrl + `/persona/${id}/skill`, skill)
  }
  addProyecto (id:number, proyecto:Project):Observable<any> {
    return this.http.post<any>(backendUrl + `/persona/${id}/proyecto`, proyecto)
  }
}
