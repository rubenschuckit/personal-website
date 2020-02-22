import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent, NavbarComponent, BlogComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE, loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
