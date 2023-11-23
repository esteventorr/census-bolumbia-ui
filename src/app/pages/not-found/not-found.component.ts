import { Component } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  title: string = 'Not Found';

  constructor(layoutService: LayoutService) {
    layoutService.setPageTitle(this.title);
  }
}
