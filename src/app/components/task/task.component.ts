import { Component, OnInit } from '@angular/core';
import{TASKS} from './mock-task';
import { Task } from './Task';
import { TaskServiceService } from 'src/app/services/task.service.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=[];

  constructor(private taskService:TaskServiceService){
    
  }
  ngOnInit(): void {
   this.taskService.getTask().subscribe((tasks)=>(
    this.tasks=tasks
   ));
  }
  onServiceDelete(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks=this.tasks.filter((t)=>t.id!==task.id)
    ));
  }
  ActiveCall(task:Task){
    task.reminder=!task.reminder;
  this.taskService.activecall(task);
  const t=this.taskService.getTask().subscribe(()=>{});
 
   
  }

}
