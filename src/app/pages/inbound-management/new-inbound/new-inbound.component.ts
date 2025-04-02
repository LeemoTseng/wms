import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputComponent } from '../../../components/utilities/input/input.component';
import { FormsModule } from '@angular/forms';
import { SelectOptionComponent } from '../../../components/utilities/select-option/select-option.component';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-new-inbound',
  imports: [IconFieldModule, DatePickerModule,
    RouterLink, InputComponent,
    FormsModule, InputComponent, SelectOptionComponent,
  ],
  templateUrl: './new-inbound.component.html',
})
export class NewInboundComponent {

  /*---------- variables ----------*/

  // styles
  columnstyle = 'py-4 align-left text-left text-sm';
  inputStyle = 'outline-offset-0 shadow-none placeholder:text-[#666] placeholder:text-[14px] w-full h-full py-2 rounded-md border border-gray-300 focus:outline outline-primary-500 w-full border border-gray-300 rounded px-2 py-1 text-sm'
  errorStyle = ''

  // input content
  traderNo: string = '12345678'; // 統編
  selectedValue: string = ''; // 供應商/客戶

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

  submit() {
    console.log('data', this.traderTableData);
    // 送出的API寫在這
  }


}
