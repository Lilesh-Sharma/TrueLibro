import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="section">
      <h2>Get In Touch</h2>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <div class="row">
          <div class="col">
            <label>Your Name</label>
            <input formControlName="name" />
          </div>
          <div class="col">
            <label>Phone</label>
            <input formControlName="phone" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input formControlName="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea formControlName="message"></textarea>
        </div>
        <div class="actions">
          <button type="submit">Send Message</button>
          <button type="button" (click)="sendWhatsApp()">WhatsApp</button>
        </div>
      </form>
    </section>
  `,
  styles: [`
    input,textarea{width:100%;padding:8px;border:1px solid #e9ecef;border-radius:8px}
    .row{display:flex;gap:12px}
    .col{flex:1}
    .actions{margin-top:12px;display:flex;gap:8px}
    button{background:var(--brand);color:#fff;padding:8px 16px;border:none;border-radius:8px}
  `]
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.email],
    message: ['']
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(){
    if(this.contactForm.invalid){
      alert('Please fill required fields');
      return;
    }
    const data = this.contactForm.value;
    const subject = `Contact from ${data.name}`;
    const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage:\n${data.message}`;
    window.location.href = `mailto:truelibroca@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  sendWhatsApp(){
    const data = this.contactForm.value;
    const whatsappText = `*Contact from True Libro*\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`;
    window.open(`https://wa.me/918318435728?text=${encodeURIComponent(whatsappText)}`, '_blank');
  }
}
