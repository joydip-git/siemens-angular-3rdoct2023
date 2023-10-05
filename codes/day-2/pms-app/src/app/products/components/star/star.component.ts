import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input("rating") productRating: number = 0
  outerDivWidth: number = 0;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productRating)
    this.outerDivWidth = 16.5 * this.productRating
    console.log(this.outerDivWidth)
  }
}
