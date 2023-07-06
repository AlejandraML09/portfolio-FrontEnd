import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experiencia, PortfolioData, emptyExperiencia, emptyPorfolio } from 'src/app/model/portfoliodata';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-add-experience-dialog',
  templateUrl: './add-experience-dialog.component.html',
  styleUrls: ['./add-experience-dialog.component.css']
})
export class AddExperienceDialogComponent {
  public experiencia: Experiencia = emptyExperiencia
  
  constructor(public portfolioService: PortfolioService, public loginService: LoginService) {

  }


  faPlus = faPlus;


}
