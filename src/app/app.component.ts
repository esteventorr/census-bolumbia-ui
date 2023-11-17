import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'census-bolumbia-ui';
  subtitle = 'Census Bolumbia';
  link = '/';
  buttonText = 'Learn More';
  imageUrl = 'https://picsum.photos/200/300';
}
