import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor() { }
  public password:string = ""
  public age:number = 0
  ngOnInit(): void {
  }
  editUser(){
    let obj = {
      password :this.password,
      age:this.age
    }
    return obj
  }
}
