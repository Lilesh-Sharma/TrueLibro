import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        <p>© 2025 True Libro. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer{background:#2c3e50;color:#fff;padding:24px 0;margin-top:40px;text-align:center}
  `]
})
export class FooterComponent {}
