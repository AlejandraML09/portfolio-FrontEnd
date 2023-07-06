import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Skills, emptySkill } from 'src/app/model/portfoliodata';
import { LoginService } from 'src/app/services/login.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.css']
})
export class AddSkillDialogComponent {
  public form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddSkillDialogComponent>,
    private formBuilder: FormBuilder,
    public loginService: LoginService, 
    public portfolioService:PortfolioService
  ) {
    this.form = this.formBuilder.group({
      lenguaje: ['', Validators.required],
      porcentaje_de_conocimiento: [0, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log("guardando skill", JSON.stringify(this.form.value))
    const id = this.loginService.getUserLoggedIn()!.user_id
    console.log("id", id)
    this.portfolioService.addSkill(id, this.form.value).subscribe(postResult => console.log('esto es el postResult', postResult))
    this.dialogRef.close()
  }
  

}
