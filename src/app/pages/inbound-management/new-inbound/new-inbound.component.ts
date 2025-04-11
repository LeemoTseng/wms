import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputComponent } from '../../../components/utilities/input/input.component';
import { FormsModule } from '@angular/forms';
import { SelectOptionComponent } from '../../../components/utilities/select-option/select-option.component';
import { DatePickerModule } from 'primeng/datepicker';
import { PopupComponent } from '../../../components/popup/popup.component';

@Component({
  selector: 'app-new-inbound',
  imports: [IconFieldModule, DatePickerModule,
    RouterLink, InputComponent, PopupComponent,
    FormsModule, InputComponent, SelectOptionComponent,
  ],
  templateUrl: './new-inbound.component.html',
})
export class NewInboundComponent {

  /*---------- inject ----------*/
  // route
  route = inject(Router)

  /*---------- variables ----------*/

  // skeleton
  isLoading: boolean = false;

  // styles
  columnstyle = 'py-4 align-left text-left text-sm';
  inputStyle = 'outline-offset-0 shadow-none placeholder:text-[#666] placeholder:text-[14px] w-full h-full py-2 rounded-md border border-gray-300 focus:outline outline-primary-500 w-full border border-gray-300 rounded px-2 py-1 text-sm'
  errorStyle = ''

  // input content
  traderNo: string = '12345678'; // 統編
  selectedValue: string = ''; // 供應商/客戶

  // popup content
  isPopupVisible: boolean = false;
  popupIcon: string = 'pi-info-circle'; // icon在這裡找：https://primeng.org/icons，要換的話希望能找有outline的比較一致
  popupIconColor: string = 'text-gray-400';
  popupTitle: string = '確定是否儲存資料';
  popupMessage: string = '此動作無法復原，請確認是否繼續進行。';
  // toaster
  toasterType: string = 'success'; // success | error | info
  toasterMsg: string = '成功！';
  toasterDuration: number = 1000;

  // table content
  /**
   * 表格欄位設定，
   * type會影響顯示的input樣式，有4種：text、datepicker、select、number
   * label是顯示名稱
   * key是回傳的key
   */
  tableSchema = [
    { key: 'batchNo', label: '批號', type: 'text' },
    { key: 'productName', label: '商品名稱', type: 'select', options: ['商品A', '商品B', '商品C'] },
    { key: 'productCode', label: '商品料號', type: 'text' },
    { key: 'productType', label: '商品類型', type: 'select', options: ['食品', '電子', '服飾'] },
    { key: 'quantity', label: '數量', type: 'number' },
    { key: 'unit', label: '單位', type: 'select', options: ['包', '箱', '件'] },
    { key: 'inboundDate', label: '入庫日期', type: 'date' },
    { key: 'expiryDate', label: '有效期限', type: 'date' },
    { key: 'warehouse', label: '倉庫', type: 'select', options: ['A倉', 'B倉'] },
    { key: 'location', label: '位置', type: 'text' },
    { key: 'boxNo', label: '箱號', type: 'text' },
    { key: 'note', label: '備註', type: 'text' }
  ];

  traderTableData: any = [
    { batchNo: '', productName: '', productCode: '', productType: '', quantity: '', unit: '', inboundDate: '', expiryDate: '', warehouse: '', location: '', boxNo: '', note: '' }
  ];

  summaryRows = [
    { label: '總數量', values: ['ASDF123456789', '1,000 PCS'] },
    { label: '', values: ['ASDF123456789', '1,000 PCS'] },
    { label: '總箱子', values: ['10', '箱'] },
    { label: '總棧板數', values: ['10', ''] },
    { label: '總重量', values: ['10', 'KG'] },
  ];

  /*---------- methods ----------*/

  // add a new row
  addRow() {
    this.traderTableData.push({
      batchNo: '',
      productName: '',
      productCode: '',
      productType: '',
      quantity: '',
      unit: '',
      inboundDate: '',
      expiryDate: '',
      warehouse: '',
      location: '',
      boxNo: '',
      note: ''
    });
  }

  // delete a row

  deleteRow(index: number) {
    this.traderTableData.splice(index, 1);
  }



  // popup
  showPopup() {
    this.isPopupVisible = true;
  }
  handlePopupConfirm() {
    this.isPopupVisible = false;
    this.route.navigate(['/inbound-management/inbound-list']);
    // call api here
    // success or not will change the toaster types
  }
  handlePopupCancel() {
    this.isPopupVisible = false;
  }
  // cancel
  btnCancel() {
    this.route.navigate(['/inbound-management/inbound-list']);

  }


}
