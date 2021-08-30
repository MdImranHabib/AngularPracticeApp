import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFlatComponent } from './flats/create-flat/create-flat.component';
import { FlatListComponent } from './flats/flat-list/flat-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'flat-list', component: FlatListComponent },
  { path: 'create-flat', component: CreateFlatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }