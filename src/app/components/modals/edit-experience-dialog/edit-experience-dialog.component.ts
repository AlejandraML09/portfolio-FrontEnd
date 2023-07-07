import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion, Experiencia, PortfolioData } from 'src/app/model/portfoliodata';


@Component({
  selector: 'app-edit-experience-dialog',
  templateUrl: './edit-experience-dialog.component.html',
  styleUrls: ['./edit-experience-dialog.component.css']
})
export class EditExperienceDialogComponent {
public portfolioDataCopy: PortfolioData

  constructor(@Inject(MAT_DIALOG_DATA) public data: {portfolioData: PortfolioData, experienceIndex: number}) {
    console.log(data)
    console.log(data.portfolioData.experiencias[data.experienceIndex])
    this.portfolioDataCopy = data.portfolioData
  }
  
  faPen = faPen

}
