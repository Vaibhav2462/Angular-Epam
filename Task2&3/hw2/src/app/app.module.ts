import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCreateComponent } from './modules/manage/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
