import { Component } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { Educacion, emptyEducacion } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-add-education-dialog',
  templateUrl: './add-education-dialog.component.html',
  styleUrls: ['./add-education-dialog.component.css']
})
export class AddEducationDialogComponent {
  public educacion: Educacion = emptyEducacion

  faPlus = faPlus;

}

