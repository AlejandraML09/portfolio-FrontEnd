import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faArrowRightFromFile, faArrowUpRightFromSquare,faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData, Project, emptyPorfolio } from 'src/app/model/portfoliodata';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AddProjectDialogComponent } from '../modals/add-project-dialog/add-project-dialog.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {
  @Input() portfolioData: PortfolioData = emptyPorfolio;

  constructor(public dialog: MatDialog, public loginService: LoginService, private cdr: ChangeDetectorRef, public portfolioService:PortfolioService) {}

  faArrowUpRightFromSquare = faArrowUpRightFromSquare
  faPlus = faPlus;
  faXmark = faXmark;

  openAddProjectDialog() {
    const dialogRef = this.dialog.open(AddProjectDialogComponent);
    dialogRef.afterClosed().subscribe(proyecto => {
      console.log("guardando projects", JSON.stringify(proyecto))
      const id = this.loginService.getUserLoggedIn()!.user_id
      console.log("id", id)
      this.portfolioService.addProyecto(id, proyecto).subscribe(postResult => console.log('esto es el postResult', postResult))
    });
  }

  openDeleteProjectSwall(index:number) {
    Swal.fire({
      title:"Eliminar",
      text:"¿Desea eliminar el proyecto " + this.portfolioData.proyectos[index].nombre_proyecto + "?",
    }).then((result) => {
      if(result.isConfirmed) {
        const userId = this.loginService.getUserLoggedIn()!.user_id
        this.portfolioService.deleteProject(userId, this.portfolioData.proyectos[index].id).subscribe(deleteResult => console.log('esto es el deleteResult', deleteResult))
        this.portfolioData.proyectos.splice(index,1)
        this.cdr.detectChanges() 
      }
    })
  }


}
