import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() link!: string;
  @Input() buttonText!: string;
}
