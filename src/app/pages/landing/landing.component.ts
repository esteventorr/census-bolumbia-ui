import { Component } from '@angular/core';
import { LANDING_PAGE } from 'src/app/constants/landing';
import { LandingPage } from 'src/app/interfaces/landing';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  title: string = 'ECS: Home';
  pageInfo: LandingPage = LANDING_PAGE;

  constructor(layoutService: LayoutService) {
    layoutService.setPageTitle(this.title);
  }
}
