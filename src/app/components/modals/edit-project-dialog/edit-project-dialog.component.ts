import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioData } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrls: ['./edit-project-dialog.component.css']
})
export class EditProjectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {portfolioData: PortfolioData, projectIndex: number}) {
    console.log(data)
    console.log(data.portfolioData.proyectos[data.projectIndex])
  }

}
