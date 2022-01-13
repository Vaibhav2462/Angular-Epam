import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';



@NgModule({
  declarations: [
    ActiveUsersComponent,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class ActiveModule { }
