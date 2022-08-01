import { Injectable } from '@angular/core';
import {Project} from "./model/project";
import {task} from "./model/task";
import {HttpClient} from "@angular/common/http";
const API="http://localhost:3000/project/"
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects;
  constructor(private http: HttpClient) {

  }

  addtasks(){
    this.projects=[new Project("projet1" ,20220509),new Project("projet2" ,20220508),new Project("projet3" ,20220503),new Project("projet4" ,20220504)];
    this.projects.sort((obj1, obj2) => {
      if (obj1.date > obj2.date) {
        return 1;
      }

      if (obj1.date < obj2.date) {
        return -1;
      }

      return 0;
    });
  }



  addproject(p){
    this.projects.push(p)
    this.projects.sort((obj1, obj2) => {
      if (obj1.date > obj2.date) {
        return 1;
      }

      if (obj1.date < obj2.date) {
        return -1;
      }

      return 0;
    });
  }


  deleteproject(p){
    this.projects.splice(this.projects.indexOf(p),1)
  }
}
