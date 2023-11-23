import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterModule } from '@angular/router';
import { SectionTitleModule } from '../section-title/section-title.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, RouterModule, SectionTitleModule],
  exports: [HeroComponent],
})
export class HeroModule {}
