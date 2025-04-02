import { Component, inject, Input, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  /*---------- inject ----------*/
  route = inject(Router)

  /*---------- @inputs ----------*/
  @Input() breadcrumbList: any[] = [];

}
