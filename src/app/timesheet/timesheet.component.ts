import { Component, OnInit } from '@angular/core';
import {task} from "../model/task";
import {Project} from "../model/project";
import {ProjectsService} from "../projects.service";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  inputdate;
  year= new Date().getFullYear();
  month= new Date().getMonth();
  days;
  months = ['January', 'February', 'Mars', 'April', 'Mai', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  Cmonth = new Date().getMonth()+1;
  Cyear = new Date().getFullYear();
  selected;
  selectedtask;
  localday;
  i = 0;
  projects;
  blure=false;
  constructor(private projectservice: ProjectsService,private logged: LoginService) {
  }

  ngOnInit(): void {
    this.logged.loggin();
    this.inputdate=this.Cyear+'-'+this.padTo2Digits(this.Cmonth)
    this.days = this.returndays()
    this.projects = this.projectservice.projects;
  }


  padTo2Digits(num): any {
    return num.toString().padStart(2, '0');
  }
  getyear(a) {
    this.Cyear = a;
  }

  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";

  alert(t) {

    this.Cyear = Number(t.slice(0,4));
    this.Cmonth = Number(t.slice(5));

    if (this.Cmonth == 2) {
      if (this.Cyear % 4 == 0) {
        this.days = 29
      } else {
        this.days = 28
      }
    } else if (this.Cmonth == 4 || this.Cmonth == 6 || this.Cmonth == 9 || this.Cmonth == 11) {
      this.days = 30
    } else {
      this.days = 31
    }

  }
  localcoef;
  setCoef(t){
    this.localcoef=t;
  }

  returndays(): number {

    if (this.Cmonth == 2) {
      if (this.Cyear % 4 == 0) {
        return 29
      } else {
        return 28
      }
    } else if (this.Cmonth == 4 || this.Cmonth == 6 || this.Cmonth == 9 || this.Cmonth == 11){
      return 30
    } else {
      return 31
    }

  }

  openPopup() {
    this.blure=true;
    this.displayStyle = "block";

  }

  save(n) {
    this.projectservice.addproject(new Project(n,20220611))
    this.closePopup();
  }

  closePopup() {
    this.blure=false;
    this.displayStyle = "none";
  }

  openPopup2(p) {
    this.blure=true;
    this.selected = p;
    this.displayStyle2 = "block";

  }

  save2(p) {
    this.selected.addTask(new task(p))
    this.closePopup2();
    this.selected = null
  }
  alerting(a){
    alert(a)
  }

  closePopup2() {
    this.blure=false;
    this.displayStyle2 = "none";
    this.selected = null
  }

  addingtask(t, d, c) {
    this.selectedtask = t;
    this.selectedtask.addHour(d, this.Cmonth, this.Cyear, c)
  }

  openPopup3(t, d) {
    this.blure=true;
    this.localday = d;
    this.selectedtask = t;
    this.displayStyle3 = "block";

  }

  save3( ) {
    this.selectedtask.addHour(this.localday, this.Cmonth, this.Cyear, this.localcoef)
    this.closePopup3();
  }

  closePopup3() {
    this.blure=false;
    this.displayStyle3 = "none";

  }

}
