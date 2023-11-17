import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() backgroundImageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() link!: string;
  @Input() buttonText!: string;
}
