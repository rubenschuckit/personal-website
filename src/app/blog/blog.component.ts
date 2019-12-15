import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpinnerService } from "../navbar/spinner.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  pathToFile: string;

  constructor(private route: ActivatedRoute, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.startSpinner();
    const fileName = this.route.snapshot.paramMap.get("file");
    this.pathToFile = `../../assets/markdown/${fileName}.md`;
  }

  onLoad(): void {
    this.spinnerService.stopSpinner();
  }

}
