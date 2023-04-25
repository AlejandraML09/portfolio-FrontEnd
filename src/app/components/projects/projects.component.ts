import { Component, Input, OnInit } from '@angular/core';
import { faArrowRightFromFile, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData, Project, emptyPorfolio } from 'src/app/model/portfoliodata';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {
  @Input() portfolioData: PortfolioData = emptyPorfolio;

  faArrowUpRightFromSquare = faArrowUpRightFromSquare

}
