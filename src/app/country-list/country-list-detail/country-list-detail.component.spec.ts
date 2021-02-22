import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListDetailComponent } from './country-list-detail.component';

describe('CountryListDetailComponent', () => {
  let component: CountryListDetailComponent;
  let fixture: ComponentFixture<CountryListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
