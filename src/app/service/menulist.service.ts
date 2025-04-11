import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {

  @Injectable({ providedIn: 'root' })

  private menuList: any[] = [];

  /**
   * 若有新增或刪除內容，請同步更新route.ts的路徑!!
   */

  getMenuList(): any[] {
    if (this.menuList.length === 0) {
      this.menuList = [
        { group: '書籤', items: [], isActive: false },
        {
          group: '基本資料管理',
          items: [
            { isEnabled: true, label: '交易對象總覽', icon: 'pi pi-fw pi-building-columns', route: '/basic-info-management/trader-overview', isActive: true },
            { isEnabled: false, label: '交易對象商品總覽', icon: 'pi pi-fw pi-book', route: '/basic-info-management/customer-products', isActive: false },
            { isEnabled: false, label: '新增交易對象', icon: 'pi pi-fw pi-book', route: '/basic-info-management/new-trader', isActive: false },
            { isEnabled: false, label: '交易對象詳情', icon: 'pi pi-fw pi-book', route: '/basic-info-management/trader-details', isActive: false },
            { isEnabled: true, label: '商品總覽', icon: 'pi pi-fw pi-cart-minus', route: '/basic-info-management/products', isActive: false },
            { isEnabled: false, label: '新增商品', icon: 'pi pi-fw pi-book', route: '/basic-info-management/new-product', isActive: false },
            { isEnabled: false, label: '商品詳情', icon: 'pi pi-fw pi-book', route: '/basic-info-management/product-details', isActive: false },
          ]
          , isActive: false
        },
        {
          group: '入庫管理',
          items: [
            { isEnabled: true, label: '入庫單總覽', icon: 'pi pi-fw pi-sign-in', route: '/inbound-management/inbound-list', isActive: false },
            { isEnabled: true, label: '新增入庫單', icon: 'pi pi-fw pi-plus-circle', route: '/inbound-management/new-inbound', isActive: false },
            { isEnabled: false, label: '入庫單詳情', icon: 'pi pi-fw pi-book', route: '/inbound-management/inbound-details', isActive: false },
            { isEnabled: true, label: '新增退貨', icon: 'pi pi-fw pi-sync', route: '/inbound-management/new-returned' },

          ]
          , isActive: false
        },
        {
          group: '出庫管理',
          items: [
            { isEnabled: true, label: '出庫單總覽', icon: 'pi pi-fw pi-sign-out', route: '/outbound-management/outbound-list', isActive: false },
            { isEnabled: true, label: '新增出庫單', icon: 'pi pi-fw pi-plus', route: '/outbound-management/new-outbound' }
          ]
          , isActive: false
        },
        {
          group: '調度管理',
          items: [
            { isEnabled: true, label: '調度總覽', icon: 'pi pi-fw pi-sync', route: '/dispatch-management/dispatch-list', isActive: false },
            { isEnabled: true, label: '新增調度單', icon: 'pi pi-fw pi-pen-to-square', route: '/dispatch-management/new-dispatch' }
          ]
          , isActive: false
        },
        {
          group: '庫存表管理',
          items: [
            { isEnabled: true, label: '庫存查詢', icon: 'pi pi-fw pi-search', route: '/inventory-management/inventory-list', isActive: false },
            { isEnabled: true, label: '倉庫總覽', icon: 'pi pi-fw pi-th-large', route: '/inventory-management/warehouses' }
          ]
          , isActive: false
        },
        {
          group: '其他',
          items: [
            { isEnabled: true, label: '登出', icon: 'pi pi-fw pi-user', route: '/others', isActive: false },
            { isEnabled: true, label: '權限管理', icon: 'pi pi-fw pi-user-edit', route: '/others/auth-management' }
          ]
        }
      ];
    }

    // from localStorage
    let bookmarkItems: any[] = [];
    const stored = localStorage.getItem('bookmarks');
    if (stored) {
      try {
        bookmarkItems = JSON.parse(stored);
      } catch {
        bookmarkItems = [];
      }
    }

    // add bookmarks
    if (bookmarkItems.length > 0) {
      bookmarkItems = bookmarkItems.map(item => ({
        isEnabled: true,
        isActive: false,
        icon: item.icon || 'pi pi-fw pi-bookmark',
        label: item.label,
        route: item.route
      }));
    } else {
      bookmarkItems = [];
    }

    // update
    this.menuList[0].items = bookmarkItems;
    return this.menuList;
  }


  // find by route
  findMenuItemByRoute(route: string): any {
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    // check bookmark
    for (let i = 1; i < this.menuList.length; i++) {
      for (const item of this.menuList[i].items) {
        if (item.route === route) {
          return { label: item.label, icon: item.icon, route: item.route };
        }
      }
    }
    return null;
  }

  // get all bookmarks
  getBookmarks(): any[] {
    const stored = localStorage.getItem('bookmarks');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
    return [];
  }

  isBookmarked(route: string): boolean {
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    const bookmarks = this.getBookmarks();
    return bookmarks.some(item => item.route === route);
  }

  addBookmark(route: string): void {
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    let bookmarks = this.getBookmarks();
    if (bookmarks.some(item => item.route === route)) {
      return;
    }
    // check route exists
    const menuItem = this.findMenuItemByRoute(route);
    let label: string;
    let icon: string = 'pi pi-fw pi-bookmark';
    if (menuItem) {
      label = menuItem.label;
      icon = menuItem.icon;
    } else {
      const parts = route.split('/');
      label = parts[parts.length - 1] || route;
    }
    const newBookmark = { route: route, label: label, icon: icon };
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    if (this.menuList.length > 0 && this.menuList[0].group === '書籤') {
      this.menuList[0].items.push({ ...newBookmark, isEnabled: true, isActive: false });
    }
  }

  // remove bookmark
  removeBookmark(route: string): void {
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter(item => item.route !== route);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // remove from menuList
    if (this.menuList.length > 0 && this.menuList[0].group === '書籤') {
      this.menuList[0].items = this.menuList[0].items.filter((item: any) => item.route !== route);
    }
  }
}