import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EditHeaderDialogComponent } from '../modals/edit-header-dialog/edit-header-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent  {
  @Input() portfolioHeader: PortfolioData = {
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
    experiencias: []
  }

  faPen = faPen

  constructor(public dialog: MatDialog, public portfolioService:PortfolioService) {}

  openDialog() {
    const dialogRef = this.dialog.open(EditHeaderDialogComponent, { data: this.portfolioHeader});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
      if(result !== "") {
        this.portfolioService.editPortfolio(this.portfolioHeader.id,result).subscribe(putResult => console.log('esto es el putResult', putResult))
      }
    });
  }
}
