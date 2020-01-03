import { Component, OnInit } from '@angular/core';
import { Link } from './navbar/navbar.interface';
import { Links } from './app.config';
import { NavigationEnd, Router } from '@angular/router';

declare const ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links: Link[] = Links;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {}
}
