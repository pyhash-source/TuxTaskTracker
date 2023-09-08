import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  task!: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter( )
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter( )

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit()
  }


}
