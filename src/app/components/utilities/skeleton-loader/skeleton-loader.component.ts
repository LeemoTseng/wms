import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  imports: [],
  templateUrl: './skeleton-loader.component.html'
})
export class SkeletonLoaderComponent {

  skeletonStyles: string = 'rounded bg-gradient-to-r from-gray-50 via-gray-100 to-gray-0 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite_linear]';

  @Input() rows: number = 5;
  @Input() cols: number = 6;
  @Input() rowHeight: number = 20;

  getRowArray(): number[] {
    return Array(this.rows).fill(0);
  }

  getColArray(): number[] {
    return Array(this.cols).fill(0);
  }

}
