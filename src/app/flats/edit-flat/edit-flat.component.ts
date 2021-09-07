import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Flat } from 'src/app/Models/FlatModel';

@Component({
  selector: 'app-edit-flat',
  templateUrl: './edit-flat.component.html',
  styleUrls: ['./edit-flat.component.css']
})
export class EditFlatComponent implements OnInit {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;

  @Input() flat:any;
  id:number;
  name:string;
  category:string;
  description:string;
  rent:number;
  meterNo:string;
  status:boolean;

  ngOnInit(): void {
    this.id=this.flat.id;
    this.name=this.flat.name;
    this.category=this.flat.category;
    this.description=this.flat.description;
    this.rent=this.flat.rent;
    this.meterNo=this.flat.meterNo;
  }

  updateFlatData(value){ 

    this.http.put(this.baseUrl + "flats/" + value.id, value).subscribe(result=>{
      alert("Updated Successfully!");      
    })
  }

}
