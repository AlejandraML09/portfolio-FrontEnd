import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCross, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { PortfolioData, emptyPorfolio } from 'src/app/model/portfoliodata';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { EditHeaderDialogComponent } from '../modals/edit-header-dialog/edit-header-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent  {
  @Input() portfolioHeader: PortfolioData = emptyPorfolio

  faPen = faPen

  faLinkedin = faLinkedin;
  constructor(public dialog: MatDialog, public portfolioService:PortfolioService, public loginService: LoginService) {}

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
