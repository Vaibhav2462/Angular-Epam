import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRoutingModule } from './manage-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    ManageUsersComponent,
    UserDetailsComponent,
    UserCreateComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule
  ],
})

export class ManageModule { }
