import { Component } from '@angular/core';
import { Project, emptyProject } from 'src/app/model/portfoliodata';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent {
  public proyecto: Project = emptyProject
}
