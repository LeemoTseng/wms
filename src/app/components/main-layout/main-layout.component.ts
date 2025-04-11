import { Component, inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenulistService } from '../../service/menulist.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BookmarkComponent } from '../utilities/bookmark/bookmark.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-main-layout',
  imports: [SidebarComponent, BreadcrumbComponent, BookmarkComponent, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {

  /**
   * Layout的主要修正檔案
   * 更動這個檔案會同時套用到所有的layout（sideBar、breadcrumb、框框的樣式）
   */

  /*-------------inject-------------- */

  router = inject(Router);
  menuList = inject(MenulistService).getMenuList();
  subscription!: Subscription;

  /*-------------variables-------------- */

  breadcrumbList: any[] = [];

  /*-------------life cycle-------------- */

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.getRoute());
    this.getRoute();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  /*-------------function-------------- */

  // for the breadcrumb
  getRoute() {
    const fullPath = this.router.url.split('?')[0];
    const pathSegments = fullPath.split('/').filter(Boolean);
    const lastTwo = pathSegments.slice(-2);

    this.breadcrumbList = lastTwo.map((segment, index) => {
      return {
        label: segment,
        url: '/' + pathSegments.slice(0, pathSegments.length - 2 + index + 1).join('/')
      };
    });

    this.breadcrumbList = this.mapBreadcrumbLabels(this.breadcrumbList);
  }

  mapBreadcrumbLabels(breadcrumbList: any[]): any[] {
    const allItems = this.menuList.flatMap(group => [
      { label: group.group, route: '/' + group.items[0]?.route.split('/')[1] },
      ...group.items
    ]);

    return breadcrumbList.map(crumb => {
      const match = allItems.find(item => item.route === crumb.url);
      return {
        ...crumb,
        label: match?.label || crumb.label
      };
    });
  }

}
