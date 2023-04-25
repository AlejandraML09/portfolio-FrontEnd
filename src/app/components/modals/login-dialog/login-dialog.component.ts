import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PortfolioData } from 'src/app/model/portfoliodata';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private apiService: ApiService,
    private loginService: LoginService,
    private router: Router,

  ) {}

    registerClicked = false;

    toggleRegister(value:boolean) {
      this.registerClicked = value;
    }


  onNoClick(): void {
    this.dialogRef.close();
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public errors: Error[] = [];

  doRegister() {
    if (this.form.invalid) {
      Swal.fire({
        title: 'Formulario incompleto',
        text: 'Por favor, complete todos los campos',
      });
      return;
    }
    this.errors = [];
    // @ts-ignore
    this.apiService.register(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe(
        (response: Response) => {
          Swal.fire({
            title: 'Registro exitoso!',
            text: 'Ya puede iniciar sesión',
          })
        },
        (errorResponse: HttpErrorResponse) => {
          let error = { msg: 'Ese usuario ya existe' };
          this.errors.push(error);
        }
      );
  }


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
      .subscribe(
        (response: Response) => {
          // @ts-ignore
          let token = response.JWT;
          console.log('Login response' + token);

          let userObject = JSON.parse(atob(token.split('.')[1])); // Base 64 decode
          let user: User = new User(
            userObject.username,
            userObject.user_id,
            userObject.profile_picture,
            userObject.banner_image,
            userObject.nombre,
            userObject.apellido,
            userObject.ocupacion
          );
          // @ts-ignore
          this.loginService.setUserLoggedIn(user, token);
          console.log('redirecting to portfolio' + user.user_id);

          this.dialogRef.close();
          this.router.navigate(['/portfolio/' + user.user_id]);
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
}

type Error = {
  msg: string;
};
