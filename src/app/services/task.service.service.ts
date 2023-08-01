import { Injectable } from '@angular/core';
import { TASKS } from '../components/task/mock-task';
import { Task } from '../components/task/Task';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpoptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  
 
   private api="http://localhost:5000/tasks";
  constructor(private h:HttpClient ) {
    
   }
  getTask():Observable <Task[]>{

    // const task=of(TASKS);

    return this.h.get<Task[]>(this.api);
  }
  deleteTask(task:Task):Observable<Task>{
    const url=`${this.api}/${task.id}`;
    return this.h.delete<Task>(url);
  }
  activecall(task:Task):Observable<Task>{
    const url=`${this.api}/${task.id}`;
    console.log(task.reminder)
    return this.h.put<Task>(url,task,httpoptions);
  }

}
