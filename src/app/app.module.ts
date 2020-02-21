import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TodoListComponentComponent } from './todoList-component/todoList-component.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
//import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TodoListComponentComponent,
    TodoEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
