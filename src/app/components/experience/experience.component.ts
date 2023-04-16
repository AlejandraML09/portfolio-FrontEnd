import { Component, OnInit, Input } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion, Experiencia, PortfolioData } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() experienceList: Experiencia[] = []
  @Input() educationList: Educacion[] = []
  
  faPen = faPen



}
