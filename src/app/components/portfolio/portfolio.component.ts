import { Component, OnInit } from '@angular/core';
import { PortfolioData } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioData:PortfolioData = {
    id: 0,
    nombre: '',
    apellido: '',
    educaciones: [],
    fecha_nacimiento: new Date(),
    nacionalidad: '',
    email: '',
    sobre_mi: '',
    ocupacion: '',
    banner_image: '',
    profile_picture: '',
    contacto: '',
    experiencias: []
  };
  constructor(private dataPortfolio: PortfolioService) {}
  ngOnInit() {
    this.dataPortfolio.getPortfolio(3).subscribe(data => {
    this.portfolioData=data;  
    })


  }
}
