import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../projects.service";
import {task} from "../model/task";
import {moveItemInArray} from "@angular/cdk/drag-drop";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks = [];
  projects;

  constructor(private projectservice: ProjectsService,private logged: LoginService) {
  }

  ngOnInit(): void {
    this.logged.loggin();
    this.projects = this.projectservice.projects;
    for (const p of this.projectservice.projects) {
      for (const y of p.tasks) {
        this.tasks.push(y)
      }

    }
  }

  getNumberTask(): Number {
    let t = 0;
    for (let p of this.projects) {
      for (let y of p.tasks) {
        t += 1;
      }
    }
    return t;
  }

  addtask(val) {
    this.tasks.push(new task(val))
  }

  delete(t) {
    setTimeout(() => {
      this.tasks.splice(t, 1);
    }, 2000)

  }

  drop(event) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

  }
}
