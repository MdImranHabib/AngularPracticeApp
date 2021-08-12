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

  getName(name){
    alert(name)
  }

  myEvent(evt){
    console.warn(evt)
  }

  disabledBox=true

  enabledBox(){
    this.disabledBox = false
  }

}
