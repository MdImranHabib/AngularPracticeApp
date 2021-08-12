import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app'
  name="Md. Imran"
  siteUrl = window.location.href

  getName(){
    return "Md. Imran Habib"
  }

  obj={
    name:"Imran",
    age:25
  }

  arr=['imran', 'habib']
}
