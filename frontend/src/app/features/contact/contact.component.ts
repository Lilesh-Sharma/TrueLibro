import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="contact-section container py-5" aria-labelledby="contact-title">
      <div class="contact-header text-center" data-aos="fade-up">
        <h2 id="contact-title">Get In Touch</h2>
        <p class="lead">We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div class="row contact-container g-4 align-items-stretch">
        <div class="col-lg-5" data-aos="fade-right" data-aos-delay="100">
          <div class="contact-info-card">
            <div class="contact-info-header">
              <h3>Contact Information</h3>
              <p>Feel free to contact us anytime. We'll get back to you as soon as possible.</p>
            </div>

            <div class="info-list">
              <div class="contact-item">
                <div class="icon-circle"><i class="fas fa-map-marker-alt"></i></div>
                <div class="contact-copy">
                  <span class="label">Office Address</span>
                  <p>Khorabar Urf Soobabazar, Uttar Pradesh, India<br/>Near Dayanand Inter college, Deoria Road, Gorakhpur-273010</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle"><i class="fas fa-phone"></i></div>
                <div class="contact-copy">
                  <span class="label">Call Us</span>
                  <p><a href="tel:+918318435728">+91-8318435728</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle"><i class="fas fa-envelope"></i></div>
                <div class="contact-copy">
                  <span class="label">Email</span>
                  <p><a href="mailto:truelibroca@gmail.com">truelibroca&#64;gmail.com</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="icon-circle"><i class="fas fa-clock"></i></div>
                <div class="contact-copy">
                  <span class="label">Business Hours</span>
                  <p>Mon-Sat - 10 AM-8 PM<br/>Sun - 11 AM-5 PM</p>
                </div>
              </div>
            </div>

            <div class="social-links" aria-label="Social media links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-7" data-aos="fade-left" data-aos-delay="200">
          <div class="contact-form-card">
            <div class="form-topline">
              <h3>Send Us a Message</h3>
              <span class="response-pill">Usually replies within 24 hours</span>
            </div>

            <form [formGroup]="contactForm" (ngSubmit)="submitForm()" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="field-group">
                    <label for="name" class="form-label">Your Name</label>
                    <input id="name" type="text" class="form-control custom-input" formControlName="name" [class.is-invalid]="isFieldInvalid('name')" placeholder="Enter your full name" />
                    <div class="invalid-feedback" *ngIf="isFieldInvalid('name')">Name is required.</div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="field-group">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input id="phone" type="tel" class="form-control custom-input" formControlName="phone" [class.is-invalid]="isFieldInvalid('phone')" placeholder="Enter your phone number" />
                    <div class="invalid-feedback" *ngIf="isFieldInvalid('phone')">Please enter a valid phone number.</div>
                  </div>
                </div>
              </div>

              <div class="field-group mt-3">
                <label for="email" class="form-label">Email Address</label>
                <input id="email" type="email" class="form-control custom-input" formControlName="email" [class.is-invalid]="isFieldInvalid('email')" placeholder="Enter your email address" />
                <div class="invalid-feedback" *ngIf="isFieldInvalid('email')">Please enter a valid email address.</div>
              </div>

              <div class="field-group mt-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea id="message" rows="5" class="form-control custom-input" formControlName="message" [class.is-invalid]="isFieldInvalid('message')" placeholder="Tell us how we can help you..."></textarea>
                <div class="invalid-feedback" *ngIf="isFieldInvalid('message')">Message is required.</div>
              </div>

              <div class="submit-row mt-4">
                <button type="submit" class="btn submit-btn" [disabled]="isSubmitting">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                  <i class="fa fa-paper-plane ms-2" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .contact-section {
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
      }

      .contact-header {
        margin-bottom: 2rem;
      }

      .contact-header h2 {
        color: #2c3e50;
        font-size: clamp(2rem, 4vw, 2.6rem);
        margin-bottom: 12px;
        position: relative;
        display: inline-block;
        letter-spacing: -0.04em;
      }

      .contact-header h2::after {
        content: '';
        display: block;
        width: 70%;
        height: 3px;
        background: #ff6600;
        margin: 12px auto 0;
        border-radius: 999px;
      }

      .lead {
        color: #666;
        font-size: 1.05rem;
        max-width: 760px;
        margin: 0 auto;
        line-height: 1.7;
      }

      .contact-container {
        margin-top: 2rem;
      }

      .contact-info-card,
      .contact-form-card {
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        height: 100%;
        border: none;
      }

      .contact-info-card {
        background: #2c3e50;
        color: #fff;
      }

      .contact-form-card {
        background: #fff;
      }

      .contact-info-header {
        margin-bottom: 1.5rem;
      }

      .contact-info-header h3 {
        font-size: 1.5rem;
        margin: 0 0 0.5rem 0;
        font-weight: 700;
        color: #fff;
      }

      .contact-info-header p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
        color: rgba(255,255,255,0.85);
      }

      .contact-form-card h3 {
        color: #2c3e50;
        margin-bottom: 1.5rem;
        font-weight: 700;
        font-size: 1.4rem;
      }

      .contact-info-card p,
      .contact-info-card a {
        color: rgba(255,255,255,0.9);
        text-decoration: none;
      }

      .info-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        margin-bottom: 1.5rem;
      }

      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .icon-circle {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(255,255,255,0.15);
        display: grid;
        place-items: center;
        flex-shrink: 0;
        color: #fff;
        font-size: 1.3rem;
      }

      .contact-copy {
        flex: 1;
      }

      .contact-copy .label {
        display: block;
        margin-bottom: 0.3rem;
        font-size: 0.75rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.75);
        font-weight: 600;
      }

      .contact-copy p {
        margin: 0;
        line-height: 1.65;
        font-size: 0.95rem;
      }

      .social-links {
        display: flex;
        gap: 0.85rem;
        margin-top: 2rem;
        flex-wrap: wrap;
      }

      .social-links a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255,255,255,0.12);
        display: grid;
        place-items: center;
        transition: all 0.2s ease;
        color: #fff;
        font-size: 1rem;
      }

      .social-links a:hover {
        background: rgba(255,255,255,0.22);
        transform: translateY(-2px);
      }

      .form-topline {
        margin-bottom: 1.75rem;
      }

      .response-pill {
        display: none;
      }

      .field-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-label {
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 0.5rem;
        display: block;
        font-size: 0.95rem;
      }

      .custom-input {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 0.85rem 1rem;
        min-height: 48px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        background: #f9f9f9;
        font-size: 0.95rem;
      }

      .custom-input:focus {
        border-color: #ff6600;
        box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1);
        background: #fff;
        outline: none;
      }

      textarea.custom-input {
        min-height: 140px;
        resize: vertical;
        font-family: inherit;
      }

      .is-invalid {
        border-color: #dc3545;
      }

      .invalid-feedback {
        display: block;
        font-size: 0.8rem;
      }

      .submit-row {
        display: flex;
        justify-content: flex-start;
      }

      .submit-btn {
        background: #ff6600;
        color: #fff;
        padding: 0.9rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        border: none;
        transition: all 0.2s ease;
        font-size: 0.95rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(255, 102, 0, 0.2);
      }

      .submit-btn:hover:not(:disabled) {
        background: #ff7700;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(255, 102, 0, 0.3);
      }

      .submit-btn:disabled {
        opacity: 0.7;
        cursor: wait;
      }

      @media (max-width: 991.98px) {
        .form-topline {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media (max-width: 767.98px) {
        .contact-info-card,
        .contact-form-card {
          padding: 1.5rem;
        }

        .contact-info-header {
          margin-bottom: 1.25rem;
        }

        .info-list {
          gap: 1rem;
        }
      }

      .modal-content {
        border-radius: 18px;
      }
    `,
  ],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9()\-\s]{10,15}$/)]],
      email: ['', [Validators.email]],
      message: ['', [Validators.required]],
    });

    this.contactForm.get('phone')?.valueChanges.subscribe((value: string) => {
      if (!value) return;
      const formatted = this.contactService.formatPhoneNumber(value);
      if (formatted !== value) {
        this.contactForm.get('phone')?.setValue(formatted, { emitEvent: false });
      }
    });
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  submitForm(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
      },
    });
  }
}
