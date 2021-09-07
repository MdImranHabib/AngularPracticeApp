import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Flat } from 'src/app/Models/FlatModel';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  flatList:Flat[];
  baseUrl = environment.apiUrl;
  
  ModalTitle:string;
  ActivateEditFlatComp:boolean=false;
  flat:any;

  ngOnInit(): void {
    this.getFlatsData();
  }

  getFlatsData(){
    return this.http.get<Flat[]>(this.baseUrl + "flats").subscribe((res:Flat[])=>
    {
      this.flatList = res;         
    });
  }

  editClick(item){
    this.flat=item;
    this.ModalTitle="Update Flat Info";
    this.ActivateEditFlatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.http.delete(this.baseUrl + "flats/" + item.id).subscribe(result=>{
        alert("Deleted Successfully!");   
        this.getFlatsData();           
      })
    }
  }

  closeClick(){
    this.ActivateEditFlatComp= false;
    this.getFlatsData();
  }

}
