import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { HeroModule } from 'src/app/components/hero/hero.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, ButtonModule, HeroModule],
})
export class LandingModule {}
