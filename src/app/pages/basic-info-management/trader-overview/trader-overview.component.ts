import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputComponent } from '../../../components/utilities/input/input.component';
import { SelectOptionComponent } from "../../../components/utilities/select-option/select-option.component";
import { SkeletonLoaderComponent } from "../../../components/utilities/skeleton-loader/skeleton-loader.component";

@Component({
  selector: 'app-trader-overview',
  imports: [FormsModule, SelectModule, InputTextModule,
    ButtonModule, ReactiveFormsModule, IconFieldModule,
    InputComponent, SelectOptionComponent, SkeletonLoaderComponent,
    SkeletonLoaderComponent],
  standalone: true,
  templateUrl: './trader-overview.component.html',
  styles: ` `
})
export class TraderOverviewComponent {


  /*---------- variables ----------*/

  // skeleton
  isLoading: boolean = true;

  // styles
  columnstyle = 'py-4 align-left text-left text-sm';


  // trader search content
  selectedTraderName: any;
  selectedTraderType: any;
  selectedTraderRole: any;
  selcetedTraderCode: any;
  traderNo: string = ''; // 統編
  isEnabled: boolean | undefined;

  traders = [
    { traderCode: 'ABC', traderName: '高瑟有限公司', traderType: '零售', traderRole: '供應商' },
    { traderCode: 'DEF', traderName: '伊麗莎白有限公司', traderType: '配件', traderRole: '客戶' },
    { traderCode: 'GHI', traderName: '里昂有限公司', traderType: '電子產品', traderRole: '供應商' },
    { traderCode: 'JKL', traderName: '索菲亞有限公司', traderType: '時尚', traderRole: '客戶' },
    { traderCode: 'MNO', traderName: '馬庫斯有限公司', traderType: '書籍', traderRole: '供應商' },
    { traderCode: 'PQR', traderName: '艾米有限公司', traderType: '美容', traderRole: '客戶' },
    { traderCode: 'STU', traderName: '傑森有限公司', traderType: '玩具', traderRole: '供應商' },
    { traderCode: 'VWX', traderName: '奧利維亞有限公司', traderType: '鞋類', traderRole: '客戶' },
    { traderCode: 'YZA', traderName: '亨利有限公司', traderType: '雜貨', traderRole: '供應商' },
    { traderCode: 'BCD', traderName: '露娜有限公司', traderType: '寵物用品', traderRole: '客戶' }
  ];


  traderTableColumns = ['啟用', '對象代碼', '對象名稱', '統編', '對象類型', '角色', '建立人員', '最後更新'];
  traderTableData = [
    { enable: true, code: 'ABC001', name: '伊麗莎白有限公司', traderNo: '12345678', traderType: '零售', traderRole: '供應商', createdName: 'admin', createdAt: '2024-01-10', updatedName: 'admin', updatedAt: '2024-02-12' },
    { enable: false, code: 'DEF002', name: '里昂有限公司', traderNo: '87654321', traderType: '配件', traderRole: '客戶', createdName: 'admin', createdAt: '2024-01-15', updatedName: 'admin', updatedAt: '2024-02-20' },
    { enable: false, code: 'GHI003', name: '索菲亞有限公司', traderNo: '13579246', traderType: '電子', traderRole: '供應商', createdName: 'admin', createdAt: '2024-01-20', updatedName: 'admin', updatedAt: '2024-02-25' },
    { enable: false, code: 'JKL004', name: '馬庫斯有限公司', traderNo: '24681357', traderType: '時尚', traderRole: '客戶', createdName: 'admin', createdAt: '2024-01-22', updatedName: 'admin', updatedAt: '2024-02-28' },
    { enable: false, code: 'MNO005', name: '艾米有限公司', traderNo: '11112222', traderType: '書籍', traderRole: '供應商', createdName: 'admin', createdAt: '2024-01-28', updatedName: 'admin', updatedAt: '2024-03-01' },
    { enable: true, code: 'PQR006', name: '傑森有限公司', traderNo: '33334444', traderType: '美妝', traderRole: '客戶', createdName: 'admin', createdAt: '2024-02-01', updatedName: 'admin', updatedAt: '2024-03-05' },
    { enable: true, code: 'STU007', name: '奧利維亞有限公司', traderNo: '55556666', traderType: '玩具', traderRole: '供應商', createdName: 'admin', createdAt: '2024-02-03', updatedName: 'admin', updatedAt: '2024-03-08' },
    { enable: true, code: 'VWX008', name: '亨利有限公司', traderNo: '77778888', traderType: '鞋類', traderRole: '客戶', createdName: 'admin', createdAt: '2024-02-05', updatedName: 'admin', updatedAt: '2024-03-10' },
    { enable: true, code: 'YZA009', name: '露娜有限公司', traderNo: '99990000', traderType: '食品', traderRole: '供應商', createdName: 'admin', createdAt: '2024-02-10', updatedName: 'admin', updatedAt: '2024-03-15' },
    { enable: true, code: 'BCD010', name: '亨利有限公司', traderNo: '11223344', traderType: '寵物用品', traderRole: '客戶', createdName: 'admin', createdAt: '2024-02-15', updatedName: 'admin', updatedAt: '2024-03-20' }
  ];

  traderRoles = [{
    name: '供應商',
    code: 'supplier'
  },
  {
    name: '客戶',
    code: 'customer'
  }]


  /*---------- lifecycle hooks ----------*/

  ngOnInit() {
    // simulate loading
    setTimeout(() => {
      this.isLoading = false;
    }
      , 3000);
  }


  /*---------- methods ----------*/

  // get data from api
  //...

  // get data from child-component
  getInputValue(value: string) {
    this.traderNo = value;
    console.log(this.traderNo);
  }
}
