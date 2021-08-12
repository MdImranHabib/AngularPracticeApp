import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
