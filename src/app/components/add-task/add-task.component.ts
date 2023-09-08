import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: any;
  day: any;
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('please add a task name... and focus...');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    //todo: emit event
    this.onAddTask.emit(newTask)

    
    this.text = '';
    this.day = '';
    this.reminder = false;

  }




}
