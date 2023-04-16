import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioData } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolioData: PortfolioData = {
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
    experiencias: [],
  };
  id: number = 0;

  constructor(
    private dataPortfolio: PortfolioService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.dataPortfolio.getPortfolio(this.id).subscribe((data) => {
        this.portfolioData = data;
      });
    });
  }
}
