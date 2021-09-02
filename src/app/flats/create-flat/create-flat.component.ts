import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Flat } from 'src/app/Models/FlatModel';

@Component({
  selector: 'app-create-flat',
  templateUrl: './create-flat.component.html',
  styleUrls: ['./create-flat.component.css']
})
export class CreateFlatComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  baseUrl = environment.apiUrl;

  saveFlatData(value){    
    this.http.post(this.baseUrl + "flats", value).subscribe((result)=>{
      console.log("result", result);
      
    })
  }

}
