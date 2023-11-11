import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeroComponent } from './hero/hero.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkButtonComponent,
    ParagraphComponent,
    HeroComponent,
    SectionTitleComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
