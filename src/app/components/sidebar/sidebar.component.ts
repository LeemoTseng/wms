import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { MenulistService } from '../../service/menulist.service';



@Component({
  selector: 'app-sidebar',
  imports: [IconFieldModule, NgClass, TooltipModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  /*---------- inject ----------*/
  route = inject(Router);
  menuList = inject(MenulistService).getMenuList();


  /*---------- variables ----------*/

  // menulist
  collapsed: boolean = false;
  selectedMenuItem: string = '交易對象總覽';


  /*---------- lifecycle hooks ----------*/

  ngOnInit() {
    this.menuList = this.menuList.map(group => ({
      ...group,
      items: group.items.filter(item => item.isEnabled)
    }));
  }

  /*---------- methods ----------*/

  /**
   * 
   * 要新增或刪除Sidebar的內容，請由menulist.service.ts進行修改
   * 
   */

  // menulist be clicked
  onMenuClick(selectedItem: any) {
    this.selectedMenuItem = selectedItem.label;

    this.menuList.forEach(group => {
      group.items.forEach((item: any) => {
        item.isActive = false;
      });
    });
    selectedItem.isActive = true;
    console.log('selectedItem.label', selectedItem.label);
    this.route.navigate([selectedItem.route]);
    console.log('selectedItem.route', selectedItem.route);

  }

  // toggle sidebar
  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }


}
