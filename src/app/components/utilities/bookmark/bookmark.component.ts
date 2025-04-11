import { Component, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { MenulistService } from '../../../service/menulist.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bookmark',
  imports: [IconFieldModule],
  templateUrl: './bookmark.component.html',
})
export class BookmarkComponent {

  /*---------- inject ----------*/
  router = inject(Router);
  menuService = inject(MenulistService);

  /*---------- variables ----------*/
  isBookmarked: boolean = false;
  currentRoute: string = '';


  /**---------- lifecycle ----------*/

  ngOnInit(): void {

    this.currentRoute = this.router.url.split('?')[0];
    this.isBookmarked = this.menuService.isBookmarked(this.currentRoute);
    // icon changed
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url.split('?')[0];
        this.isBookmarked = this.menuService.isBookmarked(this.currentRoute);
      });
  }

  toggleBookmark(): void {
    if (!this.currentRoute) return;
    if (this.isBookmarked) {
      this.menuService.removeBookmark(this.currentRoute);
    } else {
      this.menuService.addBookmark(this.currentRoute);
    }

    this.isBookmarked = !this.isBookmarked;
  }

}
