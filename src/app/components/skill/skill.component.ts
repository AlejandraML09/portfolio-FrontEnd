import { Component, Input } from '@angular/core';
import { PortfolioData, Skills } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
@Input() skills: Skills[] = []

  
}
