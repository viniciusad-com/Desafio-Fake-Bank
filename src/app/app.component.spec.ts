<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
=======
import { TestBed, async } from '@angular/core/testing';
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
<<<<<<< HEAD
  });
=======
  }));
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'HelloWorld'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HelloWorld');
=======
  it(`should have as title 'minha-aplicacao'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('minha-aplicacao');
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span').textContent).toContain('HelloWorld app is running!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('minha-aplicacao app is running!');
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  });
});
