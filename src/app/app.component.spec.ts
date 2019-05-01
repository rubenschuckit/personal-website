import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {InterestComponent} from "./interest/interest.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        AboutMeComponent,
        InterestComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Ruben Schuckit'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Ruben Schuckit');
  // });
//
//   // it('should render title in a h1 tag', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.debugElement.nativeElement;
//   //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to personal-website!');
//   // });
});
