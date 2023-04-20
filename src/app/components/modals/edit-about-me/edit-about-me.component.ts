import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PortfolioData } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent {

  constructor(
    public dialogRef: MatDialogRef<EditAboutMeComponent>,
    @Inject(MAT_DIALOG_DATA) public portfolioData: PortfolioData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }


}
