import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userLogged: User | null = null;

  constructor(private router: Router) {
    // @ts-ignore
    this.userLogged = JSON.parse(localStorage.getItem('currentUser'))
  }

  isLogged() {
    return this.userLogged !== null;
  }


  setUserLoggedIn(user: User, token: string) {
    this.userLogged = user;
    localStorage.setItem("JWT", token);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // isLoggedAsAdmin() {
  //   // @ts-ignore
  //   return this.userLogged !== null && this.userLogged?.role == "ADMIN";
  // }

  getUserLoggedIn() {
    // @ts-ignore
    // return JSON.parse(localStorage.getItem('currentUser'));
    return this.userLogged;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('JWT');
    this.userLogged = null;
    this.router.navigate(['/login']);
  }
}