import { Component, Input, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  @Input() aboutMe: string = ""

  faPen = faPen
}

