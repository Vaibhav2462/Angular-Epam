import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { ManageModule } from "../modules/manage/manage.module";

@Pipe({
  name: "userStatus"
})
export class UserStatus implements PipeTransform {
  transform (data: any):any {
    if(data == true){
        return "DELETED"
    }
    else{
        return "ACTIVE"
    }
  }
}