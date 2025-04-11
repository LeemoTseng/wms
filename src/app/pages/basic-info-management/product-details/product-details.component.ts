import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { SkeletonLoaderComponent } from "../../../components/utilities/skeleton-loader/skeleton-loader.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PaginationComponent } from "../../../components/utilities/pagination/pagination.component";
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [FormsModule, SelectModule, InputTextModule,
    ButtonModule, ReactiveFormsModule, IconFieldModule,
    RouterLink, SkeletonLoaderComponent,
    SkeletonLoaderComponent, PaginatorModule, PaginationComponent],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {

  /*---------- inject ----------*/
  // route
  route = inject(Router)

  /*---------- variables ----------*/

  // skeleton
  isLoading: boolean = true;

  // styles
  columnstyle = 'py-4 align-left text-left text-sm';
  pKeyStyle = 'text-sm ';
  pValueStyle = 'text-sm';

  // data

  infoCols: string[] = ['交易對象名稱', '統編', '交易對象編號', '角色', '交易對象類型', '地區', '地址']
  contactCols: string[] = ['聯絡人姓名', '職稱', 'Email', '電話', '傳真']

  infoData: any =
    {
      partyName: '商品詳情',
      partyCode: 'YX001',
      companyID: '12345678',
      isVendor: true,
      partyType: '製造業',
      address: '台北市中山區南京東路三段100號',
    }
  contactData: any = {
    contactName: '王小明',
    contactTitle: '經理',
    email: '',
    phoneNumber: '02-1234-5678',
    faxNumber: '02-1234-5679',
  }

  tableColumns = ['啟用', '商品名稱', '商品料好', '客戶的商品編號', '有效天數', '重量', '長寬高', '基本單位']
  tableData = [
    { isActive: true, itemName: '商品A', itemCode: 'P001', description: 'C001', validDays: 30, weight: 1.5, length: '10', width: '10', height: '10', baseUom: 'PC' },
    { isActive: false, itemName: '商品B', itemCode: 'P002', description: 'C002', validDays: 60, weight: 2.0, length: '15', width: '15', height: '15', baseUom: 'KG' },
    { isActive: true, itemName: '商品C', itemCode: 'P003', description: 'C003', validDays: 90, weight: 0.5, length: '5', width: '5', height: '5', baseUom: 'BOX' },
    { isActive: true, itemName: '商品D', itemCode: 'P004', description: 'C004', validDays: 120, weight: 3.0, length: '20', width: '20', height: '20', baseUom: 'PC' },
    { isActive: false, itemName: '商品E', itemCode: 'P005', description: 'C005', validDays: 45, weight: 1.2, length: '12', width: '12', height: '12', baseUom: 'KG' },
    { isActive: true, itemName: '商品F', itemCode: 'P006', description: 'C006', validDays: 15, weight: 0.8, length: '8', width: '8', height: '8', baseUom: 'BOX' },
    { isActive: false, itemName: '商品G', itemCode: 'P007', description: 'C007', validDays: 180, weight: 4.5, length: '25', width: '25', height: '25', baseUom: 'PC' },
    { isActive: true, itemName: '商品H', itemCode: 'P008', description: 'C008', validDays: 75, weight: 2.5, length: '18', width: '18', height: '18', baseUom: 'KG' },
    { isActive: false, itemName: '商品I', itemCode: 'P009', description: 'C009', validDays: 10, weight: 0.3, length: '6', width: '6', height: '6', baseUom: 'BOX' },
    { isActive: true, itemName: '商品J', itemCode: 'P010', description: 'C010', validDays: 365, weight: 5.0, length: '30', width: '30', height: '30', baseUom: 'PC' },
  ]

  // pagination
  pagedData: { isActive: boolean; itemName: string; itemCode: string; description: string; validDays: number; weight: number; length: string; width: string; height: string; baseUom: string; }[] = [];

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

  }

  /*---------- methods ----------*/




  // route to details
  goToTraderDetails(item: string) {
    // console.log(item);
    this.route.navigate(['/basic-info-management/trader-details']);
  }


  // Format data
  getInfoValue(col: string): string {
    switch (col) {
      case '交易對象名稱':
        return this.infoData.partyName;
      case '統編':
        return this.infoData.companyID;
      case '交易對象編號':
        return this.infoData.partyCode;
      case '角色':
        return this.infoData.isVendor ? '供應商' : '客戶';
      case '交易對象類型':
        return this.infoData.partyType;
      case '地區':
        return '台灣';
      case '地址':
        return this.infoData.address;
      default:
        return '-';
    }
  }
  getContactValue(col: string): string {
    switch (col) {
      case '聯絡人姓名':
        return this.contactData.contactName;
      case '職稱':
        return this.contactData.contactTitle;
      case 'Email':
        return this.contactData.email || '-';
      case '電話':
        return this.contactData.phoneNumber;
      case '傳真':
        return this.contactData.faxNumber;
      default:
        return '-';
    }
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



}
