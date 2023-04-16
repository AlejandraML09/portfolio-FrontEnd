import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Educacion, Experiencia, PortfolioData } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-edit-experience-dialog',
  templateUrl: './edit-experience-dialog.component.html',
  styleUrls: ['./edit-experience-dialog.component.css']
})
export class EditExperienceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public portfolioData: PortfolioData) {}

}
