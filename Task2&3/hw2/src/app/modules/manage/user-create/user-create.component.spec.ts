import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombineName } from 'src/app/pipes/combineName.pipe';
import { UserStatus } from 'src/app/pipes/userStatus.pipe';

import { UserCreateComponent } from './user-create.component';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateComponent,CombineName ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ("add user", ()=>{
    let res = component.addUser()
    expect(res).toBe(undefined)
  })
});
