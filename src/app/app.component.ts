import { Component, OnInit } from '@angular/core';
import { Link } from './navbar/navbar.interface';
import { Links } from './app.config';
import { Gtag } from 'angular-gtag';

declare const ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links: Link[] = Links;

  constructor(gtag: Gtag) {
  }

  ngOnInit() {
  }
}
