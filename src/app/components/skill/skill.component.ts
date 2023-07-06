import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PortfolioData, Skills, emptyPorfolio } from 'src/app/model/portfoliodata';
import { faPlus,  faXmark} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { AddSkillDialogComponent } from '../modals/add-skill-dialog/add-skill-dialog.component';
import { PortfolioService } from 'src/app/services/portfolio.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
@Input() portfolioData: PortfolioData = emptyPorfolio

constructor(public dialog: MatDialog, public loginService: LoginService, public portfolioService:PortfolioService,  private cdr: ChangeDetectorRef) {}

openDeleteSkillSwall(index:number) {
  Swal.fire({
    title:"Eliminar",
    text:"¿Desea eliminar el skill " + this.portfolioData.skills[index].lenguaje + "?",
    
  }).then((result) => {
    if(result.isConfirmed) {
      const userId = this.loginService.getUserLoggedIn()!.user_id
      this.portfolioService.deleteSkill(userId, this.portfolioData.skills[index].id).subscribe(deleteResult => console.log('esto es el deleteResult', deleteResult))
      this.portfolioData.skills.splice(index,1)
      this.cdr.detectChanges() 
    }
  })
}



openAddSkillDialog() {
  const dialogRef = this.dialog.open(AddSkillDialogComponent);
  dialogRef.afterClosed().subscribe(skill => {
    // console.log("guardando educacion", JSON.stringify(skill))
    // const id = this.loginService.getUserLoggedIn()!.user_id
    // console.log("id", id)
    // this.portfolioService.addSkill(id, skill).subscribe(postResult => console.log('esto es el postResult', postResult))
  });

}

faXmark = faXmark;
faPlus = faPlus;
  
}
