import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../projects.service";
import {Project} from "../model/project";
import {moveItemInArray} from "@angular/cdk/drag-drop";
import {task} from "../model/task";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-porjects',
  templateUrl: './porjects.component.html',
  styleUrls: ['./porjects.component.css']
})
export class PorjectsComponent implements OnInit {

  selected;
  selectedTask;
  selectedProject;
  selectedindex;

  click = [];
  randclass = ["list-danger", "list-success", "list-warning", "list-info"];

  constructor(private projectser: ProjectsService,private logged: LoginService) {
  }

  projects;

  ngOnInit(): void {
    this.logged.loggin();
    this.projects = this.projectser.projects;
    for (let i = 0; i < this.projects.length; i++) {
      this.click.push(false)
    }
    this.selected = new Project('non', 2022000);

  }

  random(): String {
    return this.randclass[Math.floor(Math.random() * this.randclass.length)];
  }

  drop(event) {
    moveItemInArray(this.projectser.projects, event.previousIndex, event.currentIndex);
    moveItemInArray(this.click, event.previousIndex, event.currentIndex);
  }
  padTo2Digits(num): any {
    return num.toString().padStart(2, '0');
  }

  blure = false;
  displayStyle = "none";

  openPopup() {
    this.blure = true;
    this.displayStyle = "block";

  }


  save(n, d, s) {

    let u = new Date().toLocaleDateString()
    let arr = u.split('/')
    let str = String(d);
    let a = str.split('-');
    let p = new Project(n, Number(this.padTo2Digits(arr[2]) + this.padTo2Digits(arr[1]) + this.padTo2Digits(arr[0])))
    p.deadline = Number(a[0] + a[1] + a[2])
    p.state = s;
    p.deadlinedate = d;
    this.projectser.addproject(p)
    this.closePopup();
  }

  closePopup() {
    this.blure = false;
    this.displayStyle = "none";
  }

  returnTask(): Number {
    let t = 0;
    for (const p of this.projects) {
      for (const y of p.tasks) {
        t += 1;
      }
    }
    return t;
  }

  reformat(n): any {
    return n > 9 ? "" + n : "0" + n;
  }


  displayStyle2 = "none";

  openPopup2(p) {
    this.blure = true;
    this.selected = p;
    this.displayStyle2 = "block";

  }

  save2(n, d, s) {
    let index = this.projects.indexOf(this.selected)
    let str = String(d);
    let a = str.split('-');
    let y = this.selected
    y.name = n;
    y.deadline = Number(a[0] + a[1] + a[2])
    y.state = s
    y.deadlinedate = d;
    this.projectser.projects[index] = y;
    this.closePopup2();
  }

  closePopup2() {
    this.blure = false;
    this.displayStyle2 = "none";
  }

  deleteProject(p) {
    this.projectser.deleteproject(p)

  }

  deleteTask(p, t) {
    p.tasks.splice(p.tasks.indexOf(t), 1);
  }

  displayStyle3 = "none";

  openPopup3(p, t = null) {
    this.blure = true;
    this.selectedProject = p;
    if (t) {
      this.selectedTask = t;
    }
    this.displayStyle3 = "block";

  }

  save3() {
    if (this.selectedTask) {
      this.deleteTask(this.selectedProject, this.selectedTask)

    } else {
      this.deleteProject(this.selectedProject)
    }

    this.closePopup3();
    this.selectedTask = null;
    this.selectedProject = null


  }

  closePopup3() {
    this.blure = false;
    this.displayStyle3 = "none";
    this.selectedTask = null;
    this.selectedProject = null

  }


  displayStyle4 = "none";

  openPopup4(p, i) {
    this.selectedindex = i
    this.blure = true;
    this.selectedProject = p;
    this.displayStyle4 = "block";

  }

  save4(p) {
    this.selectedProject.addTask(new task(p))
    this.click[this.selectedindex] = true
    this.closePopup4();

    this.selectedProject = null
    this.selectedindex = null;
  }

  closePopup4() {
    this.blure = false;
    this.displayStyle4 = "none";
    this.selectedProject = null
    this.selectedindex = null;
  }

  displayStyle5 = "none";

  openPopup5(p, t) {
    this.selectedTask = t
    this.blure = true;
    this.selectedProject = p;
    this.displayStyle5 = "block";

  }

  save5(p) {

    this.selectedProject.tasks[this.selectedTask].task=p
    this.closePopup5();


  }

  closePopup5() {
    this.blure = false;
    this.displayStyle5 = "none";

  }



}
