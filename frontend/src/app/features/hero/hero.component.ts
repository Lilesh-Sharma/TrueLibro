import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section" aria-label="Hero section">
      <div class="video-container">
        <video autoplay muted loop playsinline preload="metadata" aria-label="Business growth video background">
          <source src="assets/videos/chart.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay">
          <h1>Your Trusted Partner in Finance, Tax Compliance, and Wealth Creation</h1>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero-section {
        width: 100%;
      }

      .video-container {
        position: relative;
        width: 100%;
        height: 60vh;
        min-height: 320px;
        overflow: hidden;
      }

      .video-container video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.7);
      }

      .video-overlay {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        padding: 1.5rem;
        background: rgba(0, 0, 0, 0.18);
      }

      .video-overlay h1 {
        margin: 0;
        max-width: 900px;
        text-align: center;
        color: #ffffff;
        font-size: clamp(1.4rem, 2.5vw, 2.5rem);
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.02em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        animation: fadeInUp 1s ease-out;
      }

      @media (max-width: 767.98px) {
        .video-container {
          height: 46vh;
          min-height: 260px;
        }

        .video-overlay {
          padding: 1.25rem;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class HeroComponent {}
