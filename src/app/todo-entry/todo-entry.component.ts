import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Tasks';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {
  @Input() taskItem: Task;
  @Output() delete = new EventEmitter<Task>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteValue() {
    this.delete.emit(this.taskItem);
  }

}
