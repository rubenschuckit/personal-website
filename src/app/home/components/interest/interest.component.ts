import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  static backgroundColors: string[] = [
    '#BBF2D3',
    '#025E73',
    '#BDD9B0'
  ];

  @Input() count: number;
  @Input() title: string;
  @Input() imageFileName: string;

  backgroundColor: string;

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor =
      InterestComponent.backgroundColors[this.count % InterestComponent.backgroundColors.length];
  }

}
