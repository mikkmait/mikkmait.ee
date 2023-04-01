import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  private url: string = 'https://mikkmait-portfolio.herokuapp.com/articles';

  data: any;
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((articles) => (this.data = articles));
  }
}
