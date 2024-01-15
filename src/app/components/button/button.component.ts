import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() styles: string = '';
  @Input() isButtonDisabled: boolean = false
  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit()
  }
}
