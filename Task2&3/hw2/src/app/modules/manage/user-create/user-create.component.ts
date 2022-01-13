import { Component, OnInit,NgModule } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(
    private userService:UsersService
  ) { }
  public newUserObj : any ={
    firstName: "",
    lastName: "",
    age: 0,
    login: "",
    password: "",
    isDeleted: false
  }
  
  public display:any = []
  ngOnInit(): void {
    this.display = this.userService.getData()
    console.log(this.display)
  }
  addUser(){
    this.display.push(this.newUserObj)
    this.userService.user = this.display
  }
}
