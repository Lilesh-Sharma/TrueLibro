import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { BusinessGuardianComponent } from '../business-guardian/business-guardian.component';
import { WealthGuardianComponent } from '../wealth-guardian/wealth-guardian.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    BusinessGuardianComponent,
    WealthGuardianComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <main class="page-shell">
      <app-about></app-about>
      <app-business-guardian></app-business-guardian>
      <app-wealth-guardian></app-wealth-guardian>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .page-shell {
        display: block;
      }
    `,
  ],
})
export class LandingPageComponent implements OnInit {
  constructor(private readonly analytics: AnalyticsService) {}

  ngOnInit(): void {
    this.analytics.trackPageView('home');
  }
}
