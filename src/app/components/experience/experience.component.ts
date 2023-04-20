import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion, Experiencia, PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EditHeaderDialogComponent } from '../modals/edit-header-dialog/edit-header-dialog.component';
import { EditExperienceDialogComponent } from '../modals/edit-experience-dialog/edit-experience-dialog.component';
import { EditEducationDialogComponent } from '../modals/edit-education-dialog/edit-education-dialog.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() portfolioData: PortfolioData = emptyPorfolio
  
  faPen = faPen

  constructor(public dialog: MatDialog, public loginService: LoginService) {}

  openExperienceEditDialog(index: number) {
    let dataForModal = { 
      data: {
        portfolioData: this.portfolioData,
        experienceIndex: index,
      }
    }
    console.log(dataForModal)
    const dialogRef = this.dialog.open(EditExperienceDialogComponent, dataForModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEducationEditDialog(index: number) {
    let dataForModal = { 
      data: {
        portfolioData: this.portfolioData,
        educationIndex: index,
      }
    }

    const dialogRef = this.dialog.open(EditEducationDialogComponent, dataForModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
