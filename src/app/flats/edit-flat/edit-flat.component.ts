import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Flat } from 'src/app/Models/FlatModel';

@Component({
  selector: 'app-edit-flat',
  templateUrl: './edit-flat.component.html',
  styleUrls: ['./edit-flat.component.css']
})
export class EditFlatComponent implements OnInit {

  baseUrl = environment.apiUrl;
  flat:Flat;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFlatData(1);    
  }

  getFlatData(id){ 
    return this.http.get<Flat>(this.baseUrl + "flats/" + id).subscribe((res:Flat)=>
    {
      this.flat = res;          
    })
  }

  updateFlatData(value){ 

    this.http.put(this.baseUrl + "flats/" + value.id, value).subscribe((result)=>{
      console.log("result", result);
      
    })
  }

}
