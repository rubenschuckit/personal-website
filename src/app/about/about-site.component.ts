import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as showdown from 'showdown';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.css']
})
export class AboutSiteComponent implements OnInit {
  content: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    if (!this.content) {
      this.httpClient.get('assets/markdown/about.md', { responseType: 'text' }).subscribe(text => {
        const converter = new showdown.Converter();
        this.content = converter.makeHtml(text);
      });
    }
  }

}
