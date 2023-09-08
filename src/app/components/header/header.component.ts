import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private uiService: UiService) { 
    this.subsciption = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  title = 'T3 - Tux Task Tracker';
  showAddTask: boolean | undefined;
  subsciption: Subscription | undefined;

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }


}
