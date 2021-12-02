import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Flat } from './Models/FlatModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-angular-app'
  name="Md. Imran"
  siteUrl = window.location.href

  //for material table  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: string[] = ['name', 'category', 'meterNo', 'rent'];
  dataSource;     

  ngOnInit():void {
    this.createTable();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createTable() {
    let tableArr: Flat[] = [
      { id: 1, name: '1-A', category: 'Large', description: '', rent: 5500, meterNo: '772-1A', status: false },
      { id: 2, name: '1-B', category: 'Semi-Large', description: '', rent: 5500, meterNo: '772-1B', status: false },
      { id: 3, name: '2-A', category: 'Extra-Large', description: '', rent: 6000, meterNo: '772-2A', status: false },
      { id: 4, name: '2-B', category: 'Small', description: '', rent: 5000, meterNo: '772-2B', status: false },
      { id: 5, name: '2-C', category: 'Small', description: '', rent: 5000, meterNo: '772-2C', status: false },
    ];
    this.dataSource=new MatTableDataSource(tableArr); 
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //end

  getName(){
    return "Md. Imran Habib"
  }

  obj={
    name:"Imran",
    age:25
  }

  arr=['imran', 'habib']
}
