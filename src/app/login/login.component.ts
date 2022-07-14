import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status;
  constructor(private router: Router,private logged: LoginService) { }

  ngOnInit(): void {
    this.logged.logout();
    this.status=this.logged.logged;
  }
  log(z ){
    this.logged.loggin();

    this.router.navigate(['dashboard']);
  }

}
