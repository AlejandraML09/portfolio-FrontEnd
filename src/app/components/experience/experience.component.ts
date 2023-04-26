import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Educacion, Experiencia, PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EditHeaderDialogComponent } from '../modals/edit-header-dialog/edit-header-dialog.component';
import { EditExperienceDialogComponent } from '../modals/edit-experience-dialog/edit-experience-dialog.component';
import { EditEducationDialogComponent } from '../modals/edit-education-dialog/edit-education-dialog.component';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() portfolioData: PortfolioData = {
    id: 0,
    nombre: '',
    apellido: '',
    fecha_nacimiento: new Date(),
    nacionalidad: '',
    email: '',
    sobre_mi: '',
    ocupacion: '',
    banner_image: '',
    profile_picture: '',
    contacto: '',
    educaciones: [],
    experiencias: [],
    skills: [],
    proyectos: []
  }
  
  faPen = faPen;
  faXmark = faXmark;

  constructor(public dialog: MatDialog, public loginService: LoginService, private cdr: ChangeDetectorRef) {}


  openDeleteExperienceSwall(index:number) {
    Swal.fire({
      title:"Eliminar",
      text:"¿Desea eliminar la experiencia " + this.portfolioData.experiencias[index].puesto + "?",
      
    }).then((result) => {
      if(result.isConfirmed) {
        this.portfolioData.experiencias.splice(index,1)
        this.cdr.detectChanges() 
      }
    })
  }

  openExperienceEditDialog(index: number) {
    let dataForModal = { 
      data: {
        portfolioData: this.portfolioData,
        experienceIndex: index,
      }
    }
    console.log(dataForModal)
    const dialogRef = this.dialog.open(EditExperienceDialogComponent, dataForModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEducationEditDialog(index: number) {
    let dataForModal = { 
      data: {
        portfolioData: this.portfolioData,
        educationIndex: index,
      }
    }

    const dialogRef = this.dialog.open(EditEducationDialogComponent, dataForModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
