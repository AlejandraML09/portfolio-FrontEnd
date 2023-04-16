import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-edit-education-dialog',
  templateUrl: './edit-education-dialog.component.html',
  styleUrls: ['./edit-education-dialog.component.css']
})
export class EditEducationDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {portfolioData: PortfolioData, educationIndex: number}) {
    console.log(data)
    console.log(data.portfolioData.educaciones[data.educationIndex])
  }
  
  faPen = faPen

}
