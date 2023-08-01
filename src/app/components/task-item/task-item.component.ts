import { Component,EventEmitter,Input, OnInit,Output } from '@angular/core';
import { Task } from '../task/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Output() DeleteTaskEmitter:EventEmitter<Task>=new EventEmitter();
  @Output() ActiveTaskEmitter:EventEmitter<Task>=new EventEmitter();
  @Input()
  
  task!: Task;


  fatime=faTimes;

  OnDelete(task:Task){
    this.DeleteTaskEmitter.emit(task);
  }
  active(task:Task){
    
    return  this.ActiveTaskEmitter.emit(task);
  }
}
