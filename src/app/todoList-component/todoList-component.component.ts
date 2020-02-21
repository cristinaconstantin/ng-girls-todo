import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Tasks';

@Component({
  selector: 'app-todoList-component',
  templateUrl: './todoList-component.component.html',
  styleUrls: ['./todoList-component.component.css']
})
export class TodoListComponentComponent implements OnInit {
  inputText:string = "input text";
  tasksToDo:Task[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  saveValue (){
    this.tasksToDo.push(new Task(this.inputText,false));
  }


  inputChange (newInput:string){
    this.inputText = newInput;
  }

  deleteValue (item:Task){
    let i=this.tasksToDo.indexOf(item);
    this.tasksToDo.splice(i,1);
  }

}

