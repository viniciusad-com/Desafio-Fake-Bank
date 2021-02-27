import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNotLoggedComponent } from './area-not-logged.component';

describe('AreaNotLoggedComponent', () => {
  let component: AreaNotLoggedComponent;
  let fixture: ComponentFixture<AreaNotLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaNotLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
