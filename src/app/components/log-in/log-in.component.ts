import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { LoginDialogComponent } from '../modals/login-dialog/login-dialog.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  @Input() dialogRef!: MatDialogRef<LoginDialogComponent>;

  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  public errors: Error[] = [];

  constructor(
    private apiService: ApiService,
    private loginService: LoginService,
    private router: Router
  ) {}

  doLogin() {
    if (this.form.invalid) {
      Swal.fire({
        title: 'Formulario incompleto',
        text: 'Por favor, complete todos los campos',
      });
      return;
    }
    this.errors = [];
    // @ts-ignore
    this.apiService.login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((response: Response) => {
          // @ts-ignore  
          let token = response.JWT
          console.log('Login response' + token);
          
          let userObject = JSON.parse(atob(token.split('.')[1])); // Base 64 decode
          let user: User = new User(userObject.username, userObject.user_id, userObject.profile_picture);
          // @ts-ignore
          this.loginService.setUserLoggedIn(user, token);
          console.log("redirecting to portfolio" + user.user_id  )
          
          this.dialogRef.close()
          this.router.navigate(['/portfolio/'+ user.user_id ]);
        },
        (errorResponse: HttpErrorResponse) => {
          console.log('Error response', errorResponse);
          let error;
          switch (errorResponse.status) {
            case 400: {
              error = { msg: 'Usuario no encontrado' };
              break;
            }
            case 401: {
              error = { msg: 'Password incorrecta' };
              break;
            }
            default: {
              error = { msg: 'Hubo un error' };
              break;
            }
          }
          this.errors.push(error);
        }
      );
  }

  ngOnInit(): void {}
}

type Error = {
  msg: string;
}
