import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <p>© 2025 True Libro. All rights reserved.</p>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .site-footer {
        background: #2c3e50;
        color: #fff;
        padding: 1.25rem 1rem;
        text-align: center;
      }

      p {
        margin: 0;
        font-size: 0.95rem;
      }
    `,
  ],
})
export class FooterComponent {}
