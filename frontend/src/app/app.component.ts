import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main class="container">
      <app-home></app-home>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {}
