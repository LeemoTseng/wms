import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { ToasterComponent } from '../toaster/toaster.component';

@Component({
  selector: 'app-popup',
  imports: [IconFieldModule, ToasterComponent],
  templateUrl: './popup.component.html'
})
export class PopupComponent {

  @Input() icon: string = 'pi-exclamation-triangle text-red-500';
  @Input() iconColor: string = 'text-red-500';
  @Input() title: string = 'Popup Title';
  @Input() message: string = 'Popup Content';
  @Input() isVisible: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  // Toaster
  @ViewChild('toasterRef') toaster?: ToasterComponent;
  @Input() toastertype: string = 'success'; // success | error | info
  @Input() toasterMsg: string = '成功！';
  @Input() toasterDuration: number = 1000;

  onConfirm() {

    if (this.toaster) {
      this.toaster.visible = true;

      setTimeout(() => {
        this.toaster!.visible = false;
        this.confirm.emit();
      }, this.toaster!.duration || 2000);
    }

  }

  onCancel() {
    this.cancel.emit();
  }


}
