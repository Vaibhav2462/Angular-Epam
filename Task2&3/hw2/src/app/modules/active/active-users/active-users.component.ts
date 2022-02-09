import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(
    private userService:UsersService,
    // private router:ActivatedRoute
  ) { }
  public display:any = []
  ngOnInit(): void {
    this.display = this.userService.getData()
    console.log(this.display)
  }
  moveToDeactivate(e){
    let login= e.login;
    for(let x of this.display){
      if(x.login == login){
        x.isDeleted = true
        break;
      }
    }
    this.userService.user = this.display
    return true
  }
}

// @NgModule({
//   imports: [CommonModule]
// })
@NgModule({
  bootstrap: [ActiveUsersComponent],
  declarations: [ActiveUsersComponent],

  imports: [
    CommonModule
  ]
})
export class ActiveUsersComponentModule { }

