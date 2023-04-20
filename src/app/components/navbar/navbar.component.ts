import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() user: User = {
    user_id: 0,
    username: '',
    profile_picture: ''
  }
  
  constructor(private router: Router, public loginService: LoginService) {}


  iniciarSesion() {
    this.router.navigate(['/log-in' ]);
  }

  faShieldCat = faShieldCat
}
