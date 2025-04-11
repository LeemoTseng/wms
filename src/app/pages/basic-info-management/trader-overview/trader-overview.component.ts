import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputComponent } from '../../../components/utilities/input/input.component';
import { SelectOptionComponent } from "../../../components/utilities/select-option/select-option.component";
import { SkeletonLoaderComponent } from "../../../components/utilities/skeleton-loader/skeleton-loader.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PaginationComponent } from "../../../components/utilities/pagination/pagination.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-trader-overview',
  imports: [FormsModule, SelectModule, InputTextModule,
    ButtonModule, ReactiveFormsModule, IconFieldModule,
    InputComponent, SelectOptionComponent, SkeletonLoaderComponent,
    SkeletonLoaderComponent, PaginatorModule, PaginationComponent,
  ],
  standalone: true,
  templateUrl: './trader-overview.component.html',
  styles: ` `
})
export class TraderOverviewComponent {

  /*---------- inject ----------*/
  route = inject(Router)

  /*---------- variables ----------*/

  // skeleton
  isLoading: boolean = true;

  // styles
  columnstyle = 'py-4 align-left text-left text-sm';

  // trader search content
  /**查詢選擇的內容存在這裡 */
  selectedPartyName: any;
  selectedPartyType: any;
  selectedRole: any;
  selcetedPartyCode: any;
  companyID: string = ''; // 統編
  isActive: boolean | undefined;

  /**表格Columns */
  tableColumns = ['啟用', '對象代碼', '對象名稱', '統編', '對象類型', '角色', '建立人員', '最後更新', '詳情'];

  /**rows內容： */
  tableData = [
    { isActive: true, partyCode: 'ABC001', partyName: '伊麗莎白有限公司', companyID: '12345678', partyType: '零售', isVendor: '供應商', createdByID: 'admin', createdAt: '2024-01-10', updatedByID: 'admin', updatedAt: '2024-02-12' },
    { isActive: false, partyCode: 'DEF002', partyName: '里昂有限公司', companyID: '87654321', partyType: '配件', isVendor: '客戶', createdByID: 'admin', createdAt: '2024-01-15', updatedByID: 'admin', updatedAt: '2024-02-20' },
    { isActive: false, partyCode: 'GHI003', partyName: '索菲亞有限公司', companyID: '13579246', partyType: '電子', isVendor: '供應商', createdByID: 'admin', createdAt: '2024-01-20', updatedByID: 'admin', updatedAt: '2024-02-25' },
    { isActive: false, partyCode: 'JKL004', partyName: '馬庫斯有限公司', companyID: '24681357', partyType: '時尚', isVendor: '客戶', createdByID: 'admin', createdAt: '2024-01-22', updatedByID: 'admin', updatedAt: '2024-02-28' },
    { isActive: false, partyCode: 'MNO005', partyName: '艾米有限公司', companyID: '11112222', partyType: '書籍', isVendor: '供應商', createdByID: 'admin', createdAt: '2024-01-28', updatedByID: 'admin', updatedAt: '2024-03-01' },
    { isActive: true, partyCode: 'PQR006', partyName: '傑森有限公司', companyID: '33334444', partyType: '美妝', isVendor: '客戶', createdByID: 'admin', createdAt: '2024-02-01', updatedByID: 'admin', updatedAt: '2024-03-05' },
    { isActive: true, partyCode: 'STU007', partyName: '奧利維亞有限公司', companyID: '55556666', partyType: '玩具', isVendor: '供應商', createdByID: 'admin', createdAt: '2024-02-03', updatedByID: 'admin', updatedAt: '2024-03-08' },
    { isActive: true, partyCode: 'VWX008', partyName: '亨利有限公司', companyID: '77778888', partyType: '鞋類', isVendor: '客戶', createdByID: 'admin', createdAt: '2024-02-05', updatedByID: 'admin', updatedAt: '2024-03-10' },
    { isActive: true, partyCode: 'YZA009', partyName: '露娜有限公司', companyID: '99990000', partyType: '食品', isVendor: '供應商', createdByID: 'admin', createdAt: '2024-02-10', updatedByID: 'admin', updatedAt: '2024-03-15' },
    { isActive: true, partyCode: 'BCD010', partyName: '亨利有限公司', companyID: '11223344', partyType: '寵物用品', isVendor: '客戶', createdByID: 'admin', createdAt: '2024-02-15', updatedByID: 'admin', updatedAt: '2024-03-20' }
  ];

  categoryOptions: string[] = [];

  /**另外設定的對照 */
  traderRoles = [{
    name: '供應商',
    code: 'supplier'
  },
  {
    name: '客戶',
    code: 'customer'
  }]


  // pagination
  pagedData: { isActive: boolean; partyCode: string; partyName: string; companyID: string; partyType: string; isVendor: string; createdByID: string; createdAt: string; updatedByID: string; updatedAt: string; }[] = [];

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
    // this.categoryOptions = Array.from(new Set(this.tableData.map(item => item.partyType)));

    // init pagedata
    this.updatePagedData();

  }


  /*---------- methods ----------*/

  // get data from api
  //...

  // get data from child-component
  /**如果有input的內容，要寫資料傳遞 */
  getInputValue(value: string) {
    this.companyID = value;
    console.log(this.companyID);
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
  goToTraderDetails(item: string) {
    // console.log(item);
    this.route.navigate(['/basic-info-management/trader-details']);
  }
  goToNewTrader() {
    // console.log(item);
    this.route.navigate(['/basic-info-management/new-trader']);
  }



}
