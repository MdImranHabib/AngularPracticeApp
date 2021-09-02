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
  
  flatList:Flat[];
  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFlatsData();
  }

  getFlatsData(){
    return this.http.get<Flat[]>(this.baseUrl + "flats").subscribe((res:Flat[])=>
    {
      this.flatList = res;         
    });
  }

}
