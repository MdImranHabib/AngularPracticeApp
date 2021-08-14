import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  disabledBox=true
  show='blue'
  color='red'
  data=['Imran', 'Habib']
  dataList=[
    {
      name:'Imran',
      age:25
    },
    {
      name:'Habib',
      age:23
    },
    {
      name:'Opu',
      age:26
    }
  ]

  getName(name){
    alert(name)
  }

  myEvent(evt){
    console.warn(evt)
  }

  enabledBox(){
    this.disabledBox = false
  }
}
