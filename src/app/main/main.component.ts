import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  obj: any = {
    name: '',
    email: ''
  }
  firstName: any;
  emailName: any;
  change:number= -1;
  selectedId:string='';

  ngOnInit(): void {
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

  addData(task:any) { // for make a Add button to update we use id and store it into SkelectedID and on the bases of that we aplly if condition and then we check the index of that llist gain and match with selected ID
    debugger;
    if(this.selectedId!=''){
     let index=this.list.findIndex((p:any)=>p.id==this.selectedId);
      this.list[index].name=this.obj.name;
      this.list[index].email=this.obj.email;
      this.selectedId='';
    }
    else{
      this.list.push({
        name: this.obj.name,
        email: this.obj.email
      })
     
      
    }
  }

  //   getEdit(i:any){
  // this.obj.name=this.list[i].name;
  // this.obj.email=this.list[i].email;
  //   }
  
  getEdit(id: any) {
    debugger;
    this.selectedId=id.toString();
    let index = this.list.findIndex((p: any) => p.id == id); // here we get the value of list id and set it = to is that  we pass in role.id
    if (index > -1) {
      this.obj.name = this.list[index].name;
      this.obj.email = this.list[index].email;
    }
  }
}
