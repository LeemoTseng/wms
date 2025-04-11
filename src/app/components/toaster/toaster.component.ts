import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-toaster',
  imports: [FormsModule, IconFieldModule],
  templateUrl: './toaster.component.html',
})
export class ToasterComponent {

  iconStyle: string = 'pi-exclamation-triangle text-red-500';

  @Input() type: string = 'success'; // success | error | info
  @Input() toasterMsg: string = '成功！';
  @Input() duration: number = 1000;

  public visible = false;

  ngOnChanges() {
    // depending on ..., set the iconStyle
    if (true) {
      this.type === 'success'
      this.iconStyle = 'pi pi-check-circle text-green-500';
    } else if (true) {
      this.type === 'error'
      this.iconStyle = 'pi pi-times-circle text-red-300';
      this.toasterMsg = '失敗！請再試一次！';
    } else {
      this.iconStyle = 'pi pi-info-circle text-blue-500';
    }
  }


}
