import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatListComponent } from './flats/flat-list/flat-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'flat-list', component: FlatListComponent },
  { path: 'flat-create', component: FlatListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }