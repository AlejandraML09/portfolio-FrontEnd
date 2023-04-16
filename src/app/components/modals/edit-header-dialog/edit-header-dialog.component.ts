import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortfolioData } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-edit-header-dialog',
  templateUrl: './edit-header-dialog.component.html',
  styleUrls: ['./edit-header-dialog.component.css']
})
export class EditHeaderDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public portfolioData: PortfolioData) {}
}
