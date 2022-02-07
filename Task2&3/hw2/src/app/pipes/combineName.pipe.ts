import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { ManageModule } from "../modules/manage/manage.module";

@Pipe({
  name: "combineName"
})
export class CombineName implements PipeTransform {
  transform (data: any):any {
    return data.join(" ")
  }
}