import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSiteComponent } from './about-site.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AboutSiteComponent', () => {
  let component: AboutSiteComponent;
  let fixture: ComponentFixture<AboutSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSiteComponent],
      imports: [HttpClientModule, MarkdownModule.forRoot({ loader: HttpClient })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
