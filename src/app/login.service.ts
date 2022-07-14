import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logged=false;

  constructor() { }
  loggin(){
    this.logged=true;

  }
  logout(){
    this.logged=false;

  }
}
