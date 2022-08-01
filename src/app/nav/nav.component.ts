import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonsService} from "../persons.service";
import {Router} from "@angular/router";
import {AuthService} from "../api/auth.service";
import {ProjService} from "../api/projects.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  projects;
  user;
  hide_side = true;
  @Output() send_enable = new EventEmitter;

  constructor(private personservice: PersonsService,  private ProjectApi: ProjService, private router: Router, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.ProjectApi.getProjects().subscribe((res) => {
      this.projects = res
    })

    this.authService.getLoggedUser(sessionStorage.getItem('id')).subscribe((res) => {
      this.user = res
    })

  }

  hide_sidebar() {
    this.hide_side = !this.hide_side;
    this.send_enable.emit(this.hide_side)
  }

  logout() {

    this.authService.logout();
  }
}
