import { Component, OnInit } from '@angular/core';
class Bag{
  color:string;
  nrOfItems:number;

  constructor(color, nr){
    this.nrOfItems = nr;
    this.color = color;
  }
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  myCalculation:number;
  title:string;
  myBag = new Bag("blue",56);
  stefsBag = new Bag("blue", 5);
  myBoxOfBags:Bag[] = [];

  constructor() { }

  ngOnInit(): void {
    this.myCalculation = 5 + 89;
    this.title = "My variable Title";
    this.myBag.nrOfItems = 23;

    this.myBoxOfBags.push(new Bag("red",1));
    this.myBoxOfBags.push(new Bag("blue",2));
    this.myBoxOfBags.push(new Bag("green",3));

    for(let i = 0; i < 10; i++){
      this.myBoxOfBags[i] = new Bag("velvet",i);
    }

  }
}
