import { Component, Input, OnInit } from "@angular/core";
import { Link } from "./navbar.interface";
import { SpinnerService } from "./spinner.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title = 'Ruben Schuckit';
  @Input() links: Link[];
  showSpinner$ = this.spinnerService.spinner$;

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
  }
}
