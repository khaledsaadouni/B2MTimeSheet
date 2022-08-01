import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../persons.service";
import {LoginService} from "../login.service";
import {AuthService} from "../api/auth.service";
import {Router} from "@angular/router";
import {Userapi} from "../model/userapi";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user;
  cuser;
  bd;
  constructor(private authservice: AuthService,private router: Router,private personservice:PersonsService,private logged: LoginService, public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.getLoggedUser(sessionStorage.getItem('id')).subscribe((res) => {
      this.cuser = res
    })
    this.logged.loggin();
  this.user=this.personservice.user
  this.bd=this.user.birthday.slice(0,4)+'-'+this.user.birthday.slice(4,6)+'-'+this.user.birthday.slice(6)

  }
  blure = false;
  displayStyle2 = "none";

  openPopup() {
    this.blure = true;
    this.displayStyle2 = "block";

  }


  save2(username , name , firstname , job , email , password , birthday , role, phone , Gender ) {

    let u=new Userapi(username , name , firstname , job , email , password , birthday , role, phone , Gender)
    this.authservice.update(this.cuser.id,u).subscribe((e)=>{location.reload()})
    this.closePopup2();
  }

  closePopup2() {
    this.blure = false;
    this.displayStyle2 = "none";
  }

}
