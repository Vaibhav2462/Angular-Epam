import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRoutingModule } from './manage-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SharedModule } from 'src/app/pipe.module';
// import { CombineName } from 'src/app/pipes/combineName.pipe';


@NgModule({
  declarations: [
    ManageUsersComponent,
    UserDetailsComponent,
    UserCreateComponent,
    EditUserComponent,
    // CombineName
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    SharedModule
  ],
})

export class ManageModule { }
