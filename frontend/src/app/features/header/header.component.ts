import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="site-header">
      <div class="logo-wrap" aria-label="True Libro home">
        <img src="assets/images/true-libro-logo.png" alt="True Libro logo" class="brand-logo" />
      </div>
    </header>

    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" aria-label="Main navigation">
      <div class="container-fluid px-3 px-lg-5">
        <a class="navbar-brand" routerLink="/" aria-label="True Libro">True Libro</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="home">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="business">Business Guardian</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="wealth">Wealth Guardian</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .site-header {
        background: #fff;
        text-align: center;
        padding: 18px 16px 8px;
      }

      .logo-wrap {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
      }

      .brand-logo {
        width: min(360px, 100%);
        max-width: 360px;
        height: auto;
        object-fit: contain;
        display: block;
        transition: transform 0.3s ease;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.04));
      }

      .logo-wrap:hover .brand-logo {
        transform: scale(1.02);
      }

      .navbar {
        background: rgba(44, 62, 80, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 0.8rem 0;
      }

      .navbar-brand {
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.03em;
        font-size: clamp(1.1rem, 1.7vw, 1.4rem);
      }

      .navbar-nav {
        gap: 0.15rem;
      }

      .nav-item {
        display: flex;
      }

      .nav-link {
        color: rgba(255,255,255,0.9) !important;
        font-weight: 500;
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 10px 18px !important;
        transition: color 0.3s ease;
        letter-spacing: 0.01em;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 4px;
        height: 2px;
        background: #ff6600;
        width: calc(100% - 24px);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .nav-link:hover::after,
      .nav-link:focus::after,
      .nav-link.active::after {
        opacity: 1;
      }

      .navbar-toggler {
        border-color: rgba(255,255,255,0.5);
      }

      .navbar-toggler:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 102, 0, 0.25);
      }

      @media (max-width: 991.98px) {
        .brand-logo {
          width: min(300px, 100%);
        }
      }

      @media (max-width: 575.98px) {
        .brand-logo {
          width: min(250px, 100%);
        }
      }
    `,
  ],
})
export class HeaderComponent {}
