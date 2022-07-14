import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonsService} from "../persons.service";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  user
  hide_side=true;
  @Output() send_enable=new EventEmitter;
  constructor(private personservice:PersonsService,private router: Router,private logged: LoginService) { }

  ngOnInit(): void {

    this.user=this.personservice.user
  }

  hide_sidebar(){
    this.hide_side=!this.hide_side;
    this.send_enable.emit(this.hide_side)
  }
  logout(){
    this.logged.logout();
    this.router.navigate(['']);
  }
}
