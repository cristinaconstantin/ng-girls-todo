export class Task{
  taskItem:string;
  taskStatus:boolean;
  constructor(item:string, status:boolean){
    this.taskItem = item;
    this.taskStatus = status;
  }
}
