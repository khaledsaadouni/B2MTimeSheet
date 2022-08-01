import { Component, OnInit } from '@angular/core';
import {AuthService} from "../api/auth.service";
import {Userapi} from "../model/userapi";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
user;
  selected;
  users;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {

    this.authservice.getUsers().subscribe((res)=>{
      this.users=res
    })
    this.selected=new Userapi('','','','','','',new Date(),'',0,'')
    this.authservice.getLoggedUser(sessionStorage.getItem('id')).subscribe((res) => {
      this.user = res
    })
  }
  refresh(){
    location.reload();
  }

   save(username , name , firstname , job , email , password , birthday , role, phone , gender ){

    let u=new Userapi(username , name , firstname , job , email , password , birthday , role, phone , gender)
    this.authservice.register(u).subscribe((re)=>{location.reload()})
   }
   delete(id){
    this.authservice.deleteuser(id).subscribe((re)=>{location.reload()})
   }
  displayStyle = "none";
  blure=false;

  openPopup2() {
     this.blure = true;
    this.displayStyle = "block";

  }

  save2(username , name , firstname , job , email , password , birthday , role, phone , Gender ) {

    let u=new Userapi(username , name , firstname , job , email , password , birthday , role, phone , Gender)
    this.authservice.update(this.selected.id,u).subscribe((e)=>{location.reload()})
    this.closePopup2();

  }

  closePopup2() {
    this.blure = false;
    this.displayStyle = "none";
  }

}
