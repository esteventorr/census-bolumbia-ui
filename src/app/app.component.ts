import { Component, HostListener } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'census-bolumbia';
  subtitle = 'Census Bolumbia';
  link = '/';
  buttonText = 'Learn More';
  imageUrl = 'https://picsum.photos/200/300';

  menuOpen = false;

  constructor(layoutService: LayoutService, private router: Router) {
    layoutService.getPageTitle().subscribe((title) => {
      this.title = title;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (!event.target.closest('.app__header')) {
      this.menuOpen = false;
    }
  }
}
