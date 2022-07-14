import {task} from "./task";

export class Project{
   name: String;
   tasks=[new task('task 1'),new task('task2')];
   date: number;
   state: String;
   deadline: Number;
   deadlinedate;
   addTask(t){
     this.tasks.push(t)
   }
   constructor(name, d ) {
     this.name=name;
     this.date=d;
     this.state="Pending";

   }


}
