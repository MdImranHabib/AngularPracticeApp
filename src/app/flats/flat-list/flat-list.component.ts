import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.loadFlatData();
  }

  baseUrl = environment.apiUrl;

  loadFlatData(){
    this.getFlatData().subscribe((res:Flat[])=>
    {
      console.log(res);
    })
  }

  getFlatData(){
    return this.http.get<Flat[]>(this.baseUrl + "Flats");
  }

}
