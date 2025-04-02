import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input',
  imports: [InputTextModule, FormsModule],
  templateUrl: './input.component.html'
})
export class InputComponent {
  /*---------- @input ----------*/
  @Input() placeholder: string = '';

  /*---------- @output ----------*/
  @Output() inputValue: any = new EventEmitter<string>();

  /*---------- methods ----------*/
  onInput(event: any) {
    console.log(event.target.value)
    this.inputValue.emit(event.target.value);
  }

}
