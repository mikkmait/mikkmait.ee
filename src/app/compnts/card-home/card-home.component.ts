import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardHomeComponent {
  @Input() articleHeading: string;
  @Input() category: string;
  @Input() date: string;
  @Input() time: string;
  @Input() author: string;
  @Input() articleContent: string;

  constructor() {
    this.articleHeading = '';
    this.category = '';
    this.date = '';
    this.time = '';
    this.author = '';
    this.articleContent = '';
  }
}
