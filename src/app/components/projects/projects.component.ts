import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: any;
  portfolioHeader: any;

  constructor(private dataPortfolio: PortfolioService) {}
  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      console.log(data);
      this.projectsList=data.projects;
      this.portfolioHeader=data;
    });
  }


}
