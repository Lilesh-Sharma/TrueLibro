import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly gTagName = 'gtag';

  trackPageView(pageName: string): void {
    this.trackEvent('page_view', { page_name: pageName });
  }

  trackEvent(eventName: string, eventData: Record<string, unknown> = {}): void {
    const globalWindow = window as unknown as Record<string, unknown> & {
      gtag?: (...args: unknown[]) => void;
    };

    if (typeof globalWindow[this.gTagName] === 'function') {
      globalWindow.gtag?.('event', eventName, eventData);
    }
  }

  trackServiceClick(serviceId: string): void {
    this.trackEvent('service_click', { service_id: serviceId });
  }

  trackFormSubmission(formName: string): void {
    this.trackEvent('form_submit', { form_name: formName });
  }
}
