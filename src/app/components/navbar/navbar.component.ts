import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { LoginDialogComponent } from '../modals/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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
  
  constructor(private router: Router, public loginService: LoginService, public dialog: MatDialog) {}


  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
    });
  }

  faShieldCat = faShieldCat
}
