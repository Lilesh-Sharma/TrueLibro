import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { ServiceItem } from '../../models/service.model';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-wealth-guardian',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section id="wealth" class="section container py-5" aria-labelledby="wealth-title">
      <div class="section-heading" data-aos="fade-up">
        <h2 id="wealth-title">Wealth Guardian</h2>
      </div>

      <div class="video-shell" data-aos="fade-up" data-aos-delay="100">
        <video
          *ngIf="!videoFailed"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          poster="assets/images/wealth.jpg"
          (error)="onVideoError()"
        >
          <source src="assets/videos/wealth.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div class="video-fallback" *ngIf="videoFailed" aria-label="Wealth guardian video unavailable">
          <img src="assets/images/wealth.jpg" alt="Wealth Guardian" />
        </div>
      </div>

      <div class="row g-4 service-grid">
        <div class="col-12 col-md-6" *ngFor="let service of services; let i = index">
          <app-service-card
            [title]="service.title"
            [description]="service.description"
            [image]="service.image"
            [serviceId]="service.id"
            [delay]="(i + 1) * 100"
          ></app-service-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .section {
        padding-top: 2.3rem;
        padding-bottom: 2.3rem;
      }

      .section-heading h2 {
        color: #2c3e50;
        border-bottom: 3px solid #ff6600;
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-weight: 700;
        display: inline-block;
        letter-spacing: -0.03em;
        font-size: clamp(1.6rem, 3vw, 2.1rem);
      }

      .video-shell {
        width: 100%;
        height: 260px;
        overflow: hidden;
        border-radius: 18px;
        margin-bottom: 2rem;
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }

      .video-shell video,
      .video-shell .video-fallback,
      .video-shell img {
        width: 100%;
        height: 100%;
        display: block;
      }

      .video-shell video {
        object-fit: cover;
      }

      .video-fallback {
        background: linear-gradient(135deg, #f5f7f9 0%, #eef2f6 100%);
      }

      .video-fallback img {
        object-fit: cover;
      }

      .service-grid {
        margin-top: 1rem;
        row-gap: 1.2rem;
      }

      .service-grid > [class*='col-'] {
        display: flex;
      }
    `,
  ],
})
export class WealthGuardianComponent implements OnInit {
  services: ServiceItem[] = [];
  videoFailed = false;

  constructor(private readonly serviceService: ServiceService) {}

  onVideoError(): void {
    this.videoFailed = true;
  }

  ngOnInit(): void {
    this.serviceService.getWealthGuardianServices().subscribe({
      next: (items) => {
        this.services = items;
      },
      error: () => {
        this.services = [];
      },
    });
  }
}
