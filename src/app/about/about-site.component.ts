import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "../navbar/spinner.service";

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.css']
})
export class AboutSiteComponent implements OnInit {

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.startSpinner();
  }

  onLoad(): void {
    this.spinnerService.stopSpinner();
  }
}
