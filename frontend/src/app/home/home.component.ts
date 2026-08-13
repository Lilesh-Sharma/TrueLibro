import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="home" class="section">
      <h2>Who are we</h2>
      <p>At <strong>TRUE LIBRO</strong> — We provide high-quality tax, accounting & financial advisory services.</p>
      <h3 class="text">True-Guardian
        <span class="image-container"><img src="/assets/images/guardian.jpg" alt="Guardian"/></span>
      </h3>
    </section>

    <section id="business" class="section">
      <h2>Business Guardian</h2>
      <!-- Services grid (simplified) -->
      <div class="services-grid">
        <div class="service-card">GST Registration & Compliance</div>
        <div class="service-card">Company Registration & Compliance</div>
      </div>
    </section>

    <section id="wealth" class="section">
      <h2>Wealth Guardian</h2>
      <p>Wealth services descriptions...</p>
    </section>
  `,
  styles: [`
    .section{background:#fff;padding:28px;border-radius:12px;margin:20px 0}
    .services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}
    .service-card{background:#fff;padding:16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.05)}
    .image-container img{width:56px;height:56px;border-radius:50%;object-fit:cover}
  `]
})
export class HomeComponent {}
