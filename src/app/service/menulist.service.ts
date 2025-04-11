import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {

  @Injectable({ providedIn: 'root' })

  /**
   * 若有新增或刪除內容，請同步更新route.ts的路徑
   */

  getMenuList() {
    return [
      {
        group: '書籤',
        items: [
          { isEnabled: true, label: '書籤', icon: 'pi pi-fw pi-bookmark', route: '/bookmark', isActive: false },
        ]
        , isActive: false
      },
      {
        group: '基本資料管理',
        items: [
          { isEnabled: true, label: '交易對象總覽', icon: 'pi pi-fw pi-building-columns', route: '/basic-info-management/trader-overview', isActive: true },
          { isEnabled: true, label: '商品總覽', icon: 'pi pi-fw pi-cart-minus', route: '/basic-info-management/products', isActive: false },
          { isEnabled: true, label: '交易對象商品總覽', icon: 'pi pi-fw pi-book', route: '/basic-info-management/customer-products', isActive: false },
          { isEnabled: false, label: '新增交易對象', icon: 'pi pi-fw pi-book', route: '/basic-info-management/new-trader', isActive: false },
        ]
        , isActive: false
      },
      {
        group: '入庫管理',
        items: [
          { isEnabled: true, label: '入庫單總覽', icon: 'pi pi-fw pi-sign-in', route: '/inbound-management/inbound-list', isActive: false },
          { isEnabled: true, label: '新增入庫單', icon: 'pi pi-fw pi-plus-circle', route: '/inbound-management/new-inbound', isActive: false },
          { isEnabled: true, label: '新增退貨', icon: 'pi pi-fw pi-sync', route: '/inbound-management/new-returned' }
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
}