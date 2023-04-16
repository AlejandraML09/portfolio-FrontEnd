import { Component, Input, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';

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
    educaciones: [],
    experiencias: []
  }

  faPen = faPen
}
