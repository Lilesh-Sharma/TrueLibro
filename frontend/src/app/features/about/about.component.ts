import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="home" class="section container py-5" aria-labelledby="about-title">
      <div class="section-heading" data-aos="fade-up">
        <h2 id="about-title">Who are we</h2>
      </div>

      <div class="about-content" data-aos="fade-up" data-aos-delay="100">
        <p>
          At <strong>TRUE LIBRO</strong> — We have been providing high-quality tax, accounting & financial advisory services to individuals and small to medium businesses in various industries. We also offer business consultancy services to help our clients grow and succeed.
        </p>

        <h3>Our Team</h3>
        <p>
          At the core of our services is a dedicated panel of professionals, including Chartered Accountants, Company Secretaries, Senior Advocates, Professional Accountants, and Expert Insurance Advisors. Together, they ensure that every service we provide is marked by precision, accountability, and expertise.
        </p>

        <div class="guardian-block">
          <h3 class="guardian-title">
            <span>True-Guardian</span>
            <img src="assets/images/guardian.jpg" alt="True Guardian shield icon" />
          </h3>
          <ul>
            <li><strong>Business Guardian</strong> - A dependable, expert and high-standard accounting service solution</li>
            <li><strong>Wealth Guardian</strong> - Expert guidance on personal finance and wealth management, helping individuals secure and grow their financial future.</li>
          </ul>
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
        position: relative;
      }

      .section-heading h2 {
        color: #2c3e50;
        border-bottom: 3px solid #ff6600;
        padding-bottom: 12px;
        margin-bottom: 24px;
        font-weight: 600;
        display: inline-block;
        letter-spacing: -0.02em;
      }

      .about-content {
        background: #fff;
        border-radius: 0;
        box-shadow: none;
        padding: 1.75rem 1.5rem;
        border: 1px solid rgba(44,62,80,0.08);
      }

      .about-content h3 {
        color: #ff6600;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 0.8rem;
        letter-spacing: -0.01em;
      }

      .guardian-block {
        margin-top: 1.5rem;
      }

      .guardian-title {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #ff6600;
        margin-bottom: 1rem;
      }

      .guardian-title img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        flex-shrink: 0;
      }

      ul {
        margin: 0;
        padding-left: 1.2rem;
        color: #2c3e50;
      }

      li + li {
        margin-top: 0.75rem;
      }

      @media (max-width: 767.98px) {
        .about-content {
          padding: 1.25rem;
        }

        .guardian-title {
          flex-wrap: wrap;
        }
      }
    `,
  ],
})
export class AboutComponent {}
