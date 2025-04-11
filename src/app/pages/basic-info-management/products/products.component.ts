import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectOptionComponent } from "../../../components/utilities/select-option/select-option.component";
import { SkeletonLoaderComponent } from "../../../components/utilities/skeleton-loader/skeleton-loader.component";
import { PaginatorState } from 'primeng/paginator';
import { PaginationComponent } from "../../../components/utilities/pagination/pagination.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [FormsModule, SelectModule, InputTextModule,
    ButtonModule, ReactiveFormsModule, IconFieldModule,
    SelectOptionComponent, SkeletonLoaderComponent,
    SkeletonLoaderComponent, PaginationComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  /*---------- inject ----------*/
  route = inject(Router)

  /*---------- variables ----------*/

  // skeleton
  isLoading: boolean = true;

  // styles
  columnstyle = 'py-4 align-left text-left text-sm';

  // search content

  selcetedItemCode: any; // 商品料號
  selectedItemName: any; // 商品名稱
  selectedCategory: any; // 商品分類
  isActive: boolean | undefined; // 啟用


  tableColumns = ['啟用', '商品料號', '商品名稱', '商品分類', '有效天數', '長寬高', '重量', '體積', '建立人員', '最後更新', '詳情'];

  tableData = [
    { isActive: true, itemCode: 'ITEM001', itemName: '智能手錶', category: '電子', validDays: 365, length: 10, width: 5, height: 1.2, weight: 0.150, volume: 0.060, createdByID: 'admin', createdAt: '2024-01-10', updatedByID: 'admin', updatedAt: '2024-02-12' },
    { isActive: false, itemCode: 'ITEM002', itemName: '有機紅茶', category: '食品', validDays: 180, length: 8, width: 8, height: 12, weight: 0.350, volume: 0.080, createdByID: 'system', createdAt: '2024-01-12', updatedByID: 'admin', updatedAt: '2024-02-20' },
    { isActive: true, itemCode: 'ITEM003', itemName: '運動鞋', category: '服飾', validDays: 999, length: 30, width: 12, height: 10, weight: 0.800, volume: 0.500, createdByID: 'admin', createdAt: '2024-01-15', updatedByID: 'system', updatedAt: '2024-03-01' },
    { isActive: true, itemCode: 'ITEM004', itemName: '保溫杯', category: '生活用品', validDays: 999, length: 7, width: 7, height: 22, weight: 0.400, volume: 0.108, createdByID: 'admin', createdAt: '2024-01-18', updatedByID: 'user1', updatedAt: '2024-03-05' },
    { isActive: false, itemCode: 'ITEM005', itemName: '藍牙喇叭', category: '電子', validDays: 730, length: 12, width: 8, height: 8, weight: 0.700, volume: 0.120, createdByID: 'user2', createdAt: '2024-01-20', updatedByID: 'admin', updatedAt: '2024-03-10' },
    { isActive: true, itemCode: 'ITEM006', itemName: '行動電源', category: '電子', validDays: 365, length: 9, width: 4, height: 2, weight: 0.250, volume: 0.072, createdByID: 'admin', createdAt: '2024-01-22', updatedByID: 'user2', updatedAt: '2024-03-12' },
    { isActive: true, itemCode: 'ITEM007', itemName: '濾掛咖啡', category: '食品', validDays: 120, length: 5, width: 5, height: 10, weight: 0.120, volume: 0.050, createdByID: 'admin', createdAt: '2024-01-25', updatedByID: 'admin', updatedAt: '2024-03-15' },
    { isActive: true, itemCode: 'ITEM008', itemName: '辦公桌燈', category: '生活用品', validDays: 999, length: 15, width: 10, height: 30, weight: 1.000, volume: 0.750, createdByID: 'system', createdAt: '2024-01-28', updatedByID: 'admin', updatedAt: '2024-03-18' },
    { isActive: false, itemCode: 'ITEM009', itemName: '旅行背包', category: '服飾', validDays: 999, length: 40, width: 25, height: 15, weight: 1.200, volume: 1.500, createdByID: 'user1', createdAt: '2024-01-30', updatedByID: 'admin', updatedAt: '2024-03-20' },
    { isActive: true, itemCode: 'ITEM010', itemName: '折疊椅', category: '戶外用品', validDays: 999, length: 60, width: 50, height: 8, weight: 2.500, volume: 2.200, createdByID: 'admin', createdAt: '2024-02-01', updatedByID: 'admin', updatedAt: '2024-04-01' }
  ];

  categoryOptions: string[] = [];


  // pagination
  pagedData: { isActive: boolean; itemCode: string; itemName: string; category: string; validDays: number; length: number; width: number; height: number; weight: number; volume: number; createdByID: string; createdAt: string; updatedByID: string; updatedAt: string; }[] = [];

  first: number = 1;
  rows: number = 5; // per page
  // totalRecords = this.tableData.length; // <----實際要使用
  totalRecords: number = 100; // mock用，假裝有100筆資料
  rowsPerPageOptions: number[] = [3, 5, 10];


  /*---------- lifecycle hooks ----------*/

  ngOnInit() {
    // simulate loading
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    // category options - find unique categories
    this.categoryOptions = Array.from(new Set(this.tableData.map(item => item.category)));

    // init pagedata
    this.updatePagedData();
  }


  /*---------- methods ----------*/

  // get data from api
  //...

  // get data from child-component
  getInputValue(value: string) {
    // this.traderNo = value;
    // console.log(this.traderNo);
  }
  // pagination

  updatePagedData() {
    const start = this.first;
    const end = this.first + this.rows;
    this.pagedData = this.tableData.slice(start, end);
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 3;
    this.updatePagedData();
  }

  // route to details
  goToProductDetails(item: string) {
    // console.log(item);
    this.route.navigate(['/basic-info-management/product-details']);
  }
  goToNewProduct() {
    // console.log(item);
    this.route.navigate(['/basic-info-management/new-product']);
  }

}
