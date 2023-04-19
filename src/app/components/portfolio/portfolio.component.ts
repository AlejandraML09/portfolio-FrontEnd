import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolioData: PortfolioData = emptyPorfolio
  id: number = 0;

  constructor(
    private dataPortfolio: PortfolioService,
    private route: ActivatedRoute,
    public loginService: LoginService
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
