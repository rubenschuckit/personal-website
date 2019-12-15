import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogComponent } from "./blog.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from "ngx-markdown";
import { RouterModule } from "@angular/router";

describe("BlogComponent", () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent],
      imports: [HttpClientModule, MarkdownModule.forRoot({ loader: HttpClient }), RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
