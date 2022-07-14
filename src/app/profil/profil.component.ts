import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../persons.service";
import {Project} from "../model/project";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user;
  bd;
  constructor(private personservice:PersonsService,private logged: LoginService) { }

  ngOnInit(): void {
    this.logged.loggin();
  this.user=this.personservice.user
  this.bd=this.user.birthday.slice(0,4)+'-'+this.user.birthday.slice(4,6)+'-'+this.user.birthday.slice(6)

  }
  blure = false;
  displayStyle = "none";

  openPopup() {
    this.blure = true;
    this.displayStyle = "block";

  }


  save( name,fn,job,email,num,bday,sk) {
    this.user.name=name
    this.user.firstname=fn
    this.user.job=job
    this.user.email=email
    this.user.number=num
    this.user.birthday=bday.slice(0,4)+bday.slice(5,7)+bday.slice(8)
    this.user.skype=sk;
    this.closePopup();
  }

  closePopup() {
    this.blure = false;
    this.displayStyle = "none";
  }

}
