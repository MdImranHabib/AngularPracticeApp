import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatListComponent } from './flat-list/flat-list.component';
import { CreateFlatComponent } from './create-flat/create-flat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FlatListComponent,
    CreateFlatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FlatListComponent,
    CreateFlatComponent
  ]
})
export class FlatsModule { }
