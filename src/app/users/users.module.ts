import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    UserListComponent
  ]
})
export class UsersModule { }
