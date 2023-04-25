import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EditAboutMeComponent } from '../modals/edit-about-me/edit-about-me.component';
import { PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
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

  faPen = faPen

  constructor(public dialog: MatDialog, public portfolioService:PortfolioService, public loginService: LoginService) {}

  openDialog() {
    const dialogRef = this.dialog.open(EditAboutMeComponent, { data: this.portfolioData});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
      if(result !== "") {
        this.portfolioService.editPortfolio(this.portfolioData.id,result).subscribe(putResult => console.log('esto es el putResult', putResult))
      }
    });
  }
}

