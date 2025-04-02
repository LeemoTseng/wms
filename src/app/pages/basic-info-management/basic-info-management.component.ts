import { Component, inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenulistService } from '../../service/menulist.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BookmarkComponent } from '../../components/tools/bookmark/bookmark.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basic-info-management',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './basic-info-management.component.html',
})
export class BasicInfoManagementComponent {

}
