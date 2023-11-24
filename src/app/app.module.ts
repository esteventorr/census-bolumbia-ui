import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParagraphModule } from './components/paragraph/paragraph.module';
import { ButtonModule } from './components/button/button.module';
import { CardModule } from './components/card/card.module';
import { HeroModule } from './components/hero/hero.module';
import { LinkButtonModule } from './components/link-button/link-button.module';
import { SectionTitleModule } from './components/section-title/section-title.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from 'auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParagraphModule,
    ButtonModule,
    CardModule,
    HeroModule,
    LinkButtonModule,
    SectionTitleModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
