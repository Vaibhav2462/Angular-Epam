import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombineName } from 'src/app/pipes/combineName.pipe';
import { UserStatus } from 'src/app/pipes/userStatus.pipe';

import { ManageUsersComponent } from './manage-users.component';

describe('ManageUsersComponent', () => {
  let component: ManageUsersComponent;
  let fixture: ComponentFixture<ManageUsersComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUsersComponent,CombineName,UserStatus ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ("details Needed", ()=>{
    let res = component.detailsNeeded("vaibhav")
    expect(res).toBe(true)
  })
  it ("create user", ()=>{
    let res = component.createUser()
    expect(res).toBe(true)
  })
  it ("edit user flag", ()=>{
    let res = component.editUserFlag("vaibhav")
    expect(res).toBe(true)
  })

});
