import {Component, Input, OnInit} from '@angular/core';
import {Link} from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title = 'Ruben Schuckit';
  @Input() links: Link[];

  constructor() {
  }

  ngOnInit() {
  }

}
