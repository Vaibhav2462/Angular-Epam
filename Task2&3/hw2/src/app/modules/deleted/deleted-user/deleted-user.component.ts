import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-deleted-user',
  templateUrl: './deleted-user.component.html',
  styleUrls: ['./deleted-user.component.css']
})
export class DeletedUserComponent implements OnInit {

  constructor(
    private userService:UsersService
  ) { }
  public display:any = []
  ngOnInit(): void {
    this.display = this.userService.getData()
    console.log(this.display)
  }
  moveToActivate(e){
    console.log(e);
    let login= e.login;
    // console.log(id)
    for(let x of this.display){
      if(x.login == login){
        x.isDeleted = false
        break;
      }
    }
    // console.log(this.display)
    this.userService.user = this.display
  }
}
@NgModule({
  bootstrap: [DeletedUserComponent],
  declarations: [DeletedUserComponent],

  imports: [
    CommonModule
  ]
})
export class DeletedUserComponentModule { }
