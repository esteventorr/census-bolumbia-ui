import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
})
export class LinkButtonComponent {
  @Input() link: string = '';
  @Input() text: string = '';

  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
