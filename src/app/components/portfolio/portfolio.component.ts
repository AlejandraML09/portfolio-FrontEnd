import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  
  isLoading = true;

  constructor(
    private dataPortfolio: PortfolioService,
    private route: ActivatedRoute,
    public loginService: LoginService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.dataPortfolio.getPortfolio(this.id).subscribe((data) => {
        this.isLoading = false;
        this.portfolioData = data;
      }, (errorResponse: HttpErrorResponse) => {
        console.log('Error response', errorResponse);
        this.router.navigate(['/portfolio-list']);
      }
      );
    });
  }
}
