import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSiteComponent } from './about-site.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AboutSiteComponent],
  imports: [CommonModule, MarkdownModule.forRoot({ loader: HttpClient })]
})
export class AboutModule {}
