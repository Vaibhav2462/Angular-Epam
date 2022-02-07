import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CombineName } from "./pipes/combineName.pipe";
import { UserStatus } from "./pipes/userStatus.pipe";


@NgModule({
  declarations: [
    CombineName,
    UserStatus
  ],
  exports: [
    CombineName,
    UserStatus
  ],
  imports: [CommonModule]
})
export class SharedModule {}