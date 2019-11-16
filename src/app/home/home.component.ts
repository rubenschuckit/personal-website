import { Component, OnDestroy, OnInit } from "@angular/core";
import { InterestComponent } from "./components/interest/interest.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit() {
  }

  // When the component is destroyed, reset count so that when it is recreated the index starts at 0.
  ngOnDestroy(): void {
    InterestComponent.staticCount = 0;
  }
}
