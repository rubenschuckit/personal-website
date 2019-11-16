import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  static staticCount = 0;
  static backgroundColors: string[] = ["#BBF2D3", "#025E73", "#BDD9B0", "#98B5AB", "#2A6652", "#7AFFD2", "#B24B32"];

  @Input() title: string;
  @Input() imageFileName: string;

  isEvenCount: boolean;
  backgroundColor: string;

  constructor() {
  }

  ngOnInit() {
    /**
     * Determine side background color and positioning of column by ordering of component in parent template.
     * Increment the static count so that next component in order will have incremented value.
     * Determine isEvenCount by whether lsb is 0 since 0 % 0 -> NaN
     */
    // tslint:disable-next-line:no-bitwise
    this.isEvenCount = (InterestComponent.staticCount & 1) === 0;
    this.backgroundColor =
      InterestComponent.backgroundColors[InterestComponent.staticCount++ % InterestComponent.backgroundColors.length];
  }
}
