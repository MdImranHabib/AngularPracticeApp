import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatListComponent } from './flat-list/flat-list.component';



@NgModule({
  declarations: [
    FlatListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlatListComponent
  ]
})
export class FlatsModule { }
