import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="service-card" [attr.data-service-id]="serviceId" data-aos="fade-up" [attr.data-aos-delay]="delay">
      <h3>{{ title }}</h3>
      <img [src]="image" [alt]="title" loading="lazy" />
      <p>{{ description }}</p>
    </article>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      .service-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 305px;
        background: #f4f4f1;
        border: 1px solid rgba(44,62,80,0.1);
        border-radius: 0;
        overflow: hidden;
        box-shadow: none;
        transition: transform 0.2s ease;
      }

      .service-card:hover {
        transform: translateY(-1px);
      }

      h3 {
        font-size: 1.02rem;
        color: #ff6600;
        font-weight: 800;
        margin: 0;
        padding: 0.7rem 0.75rem 0.45rem;
        letter-spacing: -0.02em;
        line-height: 1.2;
      }

      img {
        width: 100%;
        height: 160px;
        object-fit: contain;
        object-position: center;
        display: block;
        background: linear-gradient(135deg, #f9fafb 0%, #eef3f8 100%);
        padding: 0.15rem 0.5rem;
        border-top: 1px solid rgba(44,62,80,0.03);
        border-bottom: 1px solid rgba(44,62,80,0.03);
      }

      p {
        color: #3f4b5a;
        margin: 0;
        padding: 0.55rem 0.75rem 0.85rem;
        line-height: 1.5;
        font-size: 0.8rem;
      }
    `,
  ],
})
export class ServiceCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() serviceId = '';
  @Input() delay = 100;
}
