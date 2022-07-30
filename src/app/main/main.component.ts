import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  name:any=[]
  email:any=[]
   obj:any={
    "name" :this.name,
    "email":this.email
  }
  
 
  
  ngOnInit(): void {
    debugger;
    this.list;
  }

  list: any = [
    {
      id: 0,
      name: "Arison",
      email: 'Arison@gmail.com'
    },
    {
      id: 1,
      name: "stifen",
      email: 'stifen@gmail.com'
    },
    {
      id: 2,
      name: "sandy",
      email: 'sandy@gmail.com'
    },
  ]

  addData(obj:any){
    this.list.id=obj.id
this.list.name=obj.name
console.log(obj.name)
this.list.email=obj.email
console.log(obj.email)
this.list.push(obj.name)
this.list.push(obj.email)
console.log(this.list)


  }
}
