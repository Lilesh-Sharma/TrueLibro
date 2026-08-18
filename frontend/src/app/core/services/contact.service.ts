import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly mockEndpoint = '/api/contact';

  submitContactForm(formData: ContactFormData): Observable<{ success: boolean; message: string }> {
    const isValid = !!formData.name && !!formData.phone && !!formData.message && this.validateEmail(formData.email ?? '');

    if (!isValid) {
      return of({ success: false, message: 'Please complete all required fields with valid values.' }).pipe(delay(200));
    }

    return of({
      success: true,
      message: 'Your message has been captured successfully.',
    }).pipe(delay(300));
  }

  async sendEmail(formData: ContactFormData, recipientEmail: string): Promise<{ success: boolean; url: string }> {
    const subject = encodeURIComponent(`Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email ?? 'Not provided'}\n\nMessage:\n${formData.message}`
    );

    const url = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = url;

    return { success: true, url };
  }

  sendWhatsApp(formData: ContactFormData, phoneNumber: string): void {
    const sanitizedPhone = this.formatPhoneNumber(phoneNumber.replace(/\+|\s|-/g, ''));
    const message = encodeURIComponent(
      `Hello True Libro, I am ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email ?? 'Not provided'}\n\n${formData.message}`
    );

    window.open(`https://wa.me/${sanitizedPhone}?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  validateEmail(email: string): boolean {
    if (!email) {
      return true;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  formatPhoneNumber(phone: string): string {
    const digits = phone.replace(/\D/g, '').slice(0, 15);
    return digits.length > 10 ? `+${digits}` : digits;
  }
}
