import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDrawerComponent } from './user-drawer.component';

describe('UserDrawerComponent', () => {
  let component: UserDrawerComponent;
  let fixture: ComponentFixture<UserDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDrawerComponent]
    });
    fixture = TestBed.createComponent(UserDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
