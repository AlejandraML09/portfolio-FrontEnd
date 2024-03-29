import { Component, Input, OnInit } from '@angular/core';
import { faComments, faThumbsUp, faUpload } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  portfolioList: PortfolioData[] = []

  constructor(
    private portfolioService: PortfolioService,
    public loginService: LoginService
  ) {}

  faThumbsUp = faThumbsUp;
  faComments = faComments;
  faUpload = faUpload;

generateRandomInteger(max:number) {
    return Math.floor(Math.random() * max) + 1;
}

isLoading = true;


public randomContactNumber = this.generateRandomInteger(50);
public randomViewsNumber = this.generateRandomInteger(30);

  ngOnInit() {
    this.portfolioService.getPortfolioList().subscribe((result) => {
      console.log("info del loading", result)
      this.isLoading = false;
      this.portfolioList = result;
    }, (error) => {})

  }


  hasPicture(elemento:PortfolioData): boolean {
    return elemento.profile_picture != null
  }

  hasName(nombre:PortfolioData): boolean {
    return nombre.nombre != null
  }
}
