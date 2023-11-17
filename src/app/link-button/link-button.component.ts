import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {
  @Input() link: string = ''; // Valor predeterminado es una cadena vacía si no se proporciona
  @Input() text: string = ''; // Valor predeterminado es una cadena vacía si no se proporciona
  @Input() title: string = ''; // Valor predeterminado es una cadena vacía si no se proporciona
  
}
