import {Component, OnInit} from '@angular/core';
import {Link} from "./navbar/navbar.interface";
import {Links} from "./app.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-website hi there!';
  links: Link[] = Links;

  ngOnInit() {
  }
}
