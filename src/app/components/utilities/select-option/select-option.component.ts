import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-select-option',
  imports: [FormsModule, SelectModule],
  templateUrl: './select-option.component.html',

})
export class SelectOptionComponent {
  selectOptions: { label: string; value: any }[] = [];

  /*---------- @input ----------*/
  @Input() tableData: any[] = [];
  @Input() tableColumns: any = [];
  @Input() placeholder: string = '';
  @Input() selectedValue: string = '';
  @Input() selectedKey: string = '';
  @Input() valueItem: string = '';

  /*---------- @output ----------*/
  /**
   * 選擇內容後需回傳的參數
   */



  /*-------lifecycle hook-------*/

  ngOnInit() {
    this.selectOptions = this.tableData.map(item => ({
      label: this.isObject(item) ? item[this.valueItem] : item,
      value: this.isObject(item) ? item[this.valueItem] : item
    }));
  }
  /*---------- methods ----------*/

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object';
  }
}
