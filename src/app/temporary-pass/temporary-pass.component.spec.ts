import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryPassComponent } from './temporary-pass.component';

describe('RecoveryPassComponent', () => {
  let component: TemporaryPassComponent;
  let fixture: ComponentFixture<TemporaryPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
