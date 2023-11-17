import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent {
  @Input() text: string = ''; // El texto que se mostrará en el párrafo
  @Input() someCondition: boolean = false; // Ejemplo de condición para aplicar una clase
}
