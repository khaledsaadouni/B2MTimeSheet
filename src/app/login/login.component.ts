import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../api/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status;

  constructor(private router: Router, private authService: AuthService) {
  }

  message;

  ngOnInit(): void {
    this.authService.logout();
    this.message = null;
  }

  log(e, p) {

    this.authService.login(e, p).subscribe(
      (reponse) => {

        localStorage.setItem('token', reponse.access_token);
        sessionStorage.setItem('id', reponse.id);
        this.router.navigate(['dashboard']);

      },
      (erreur) => this.message = 'Please Verify Your Credentials'
    );

  }

}
