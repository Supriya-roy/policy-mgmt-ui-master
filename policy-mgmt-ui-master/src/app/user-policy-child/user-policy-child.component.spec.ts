import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPolicyChildComponent } from './user-policy-child.component';

describe('UserPolicyChildComponent', () => {
  let component: UserPolicyChildComponent;
  let fixture: ComponentFixture<UserPolicyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPolicyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPolicyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
