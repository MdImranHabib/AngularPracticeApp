import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatListComponent } from './flat-list/flat-list.component';
import { CreateFlatComponent } from './create-flat/create-flat.component';
import { FormsModule } from '@angular/forms';
import { EditFlatComponent } from './edit-flat/edit-flat.component';


@NgModule({
  declarations: [
    FlatListComponent,
    CreateFlatComponent,
    EditFlatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FlatListComponent,
    CreateFlatComponent,
    EditFlatComponent
  ]
})
export class FlatsModule { }
