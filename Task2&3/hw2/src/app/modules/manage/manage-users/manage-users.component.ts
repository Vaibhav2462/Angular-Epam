import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
// import { CombineName } from 'src/app/pipes/combineName.pipe';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(
    private userService:UsersService,
  ) { }
  public display:any = []
  public isClicked:boolean = false
  public isFormClicked:boolean = false
  public isEditClicked:boolean = false
  public password:string = ""
  public age:number = 0
  public itemToBeEdited:any = {}
  public showItem:any = {}
  public temp:any = ["vaibhav","guptaaa"]
  ngOnInit(): void {
    this.display = this.userService.getData()
    console.log(this.display)
  }
  detailsNeeded(item){
    this.isClicked = true
    this.isFormClicked = false
    this.isEditClicked = false
    this.showItem = item
    console.log(item)
    return true
  }
  createUser(){
    this.isClicked = false
    this.isFormClicked = true
    this.isEditClicked = false
    return true
  }
  editUserFlag(item){
    this.isClicked = false
    this.isFormClicked = false
    this.isEditClicked = true
    this.itemToBeEdited = item
    return true
  }
  editUser(){
    this.itemToBeEdited.password = this.password
    this.itemToBeEdited.age = this.age
    let login= this.itemToBeEdited.login;
    for(let x of this.display){
      if(x.login == login){
        x = this.itemToBeEdited
        break;
      }
    }
    this.userService.user = this.display
    this.isEditClicked = false
    return true
  }
}
