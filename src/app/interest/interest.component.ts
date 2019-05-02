import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  @Input() number: number;
  @Input() title: string;
  @Input() imageFileName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
