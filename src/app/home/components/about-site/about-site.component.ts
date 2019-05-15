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
    this.httpClient.get('assets/markdown/about.md', { responseType: 'text' }).subscribe(text => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
      console.log(html);
      this.content = html;
    });
  }

}
