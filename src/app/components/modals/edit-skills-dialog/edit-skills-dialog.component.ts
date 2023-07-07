import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PortfolioData } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-edit-skills-dialog',
  templateUrl: './edit-skills-dialog.component.html',
  styleUrls: ['./edit-skills-dialog.component.css']
})
export class EditSkillsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {portfolioData: PortfolioData, skillIndex: number}) {
    console.log(data)
    console.log(data.portfolioData.skills[data.skillIndex])
  }
  


}
