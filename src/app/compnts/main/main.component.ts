import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  private url: string = 'https://mikkmait-portfolio.herokuapp.com/articles';

  data: any;

  xsmall = false;
  small = false;
  medium = false;
  large = false;
  xlarge = false;

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((articles) => (this.data = articles));

    this.breakpointService.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result) => {
      this.small = false;
      this.xsmall = false;
      this.medium = false;
      this.large = false;
      this.xlarge = false;

      if (result.breakpoints[Breakpoints.XSmall]) {
        this.xsmall = true;
      }

      if (result.breakpoints[Breakpoints.Small]) {
        this.small = true;
      }

      if (result.breakpoints[Breakpoints.Medium]) {
        this.medium = true;
      }

      if (result.breakpoints[Breakpoints.Large]) {
        this.large = true;
      }

      if (result.breakpoints[Breakpoints.XLarge]) {
        this.xlarge = true;
      }
    })
  }
}
