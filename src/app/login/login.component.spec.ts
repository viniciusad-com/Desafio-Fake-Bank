<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
