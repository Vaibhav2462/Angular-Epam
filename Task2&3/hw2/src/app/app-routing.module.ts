import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ActiveUsersComponent } from './modules/active/active-users/active-users.component';
import { DeletedUserComponent } from './modules/deleted/deleted-user/deleted-user.component';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import('./modules/manage/manage.module').then(m => m.ManageModule)
  },{
    path:"active",
    component:ActiveUsersComponent
  },
  {
    path:"deleted",
    component:DeletedUserComponent
  },
  {
    path:"home",
    component:HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
