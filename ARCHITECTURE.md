# TrueLibro Architecture Reference

## 📐 Complete Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                        TRUELIBRO WEBSITE                             │
│                      Angular 18 Application                          │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
         ┌──────▼──────┐  ┌──────▼──────┐  ┌─────▼──────┐
         │   index.html │  │  styles.scss │  │   main.ts   │
         │  (Entry)     │  │  (Global CSS) │  │  (Bootstrap)│
         └──────┬───────┘  └──────────────┘  └─────┬──────┘
                │                                   │
                └───────────────┬───────────────────┘
                                │
                     ┌──────────▼──────────┐
                     │   AppComponent      │
                     │ (Initializes AOS)   │
                     └──────────┬──────────┘
                                │
                     ┌──────────▼──────────┐
                     │   Router (routes)   │
                     └──────────┬──────────┘
                                │
                  ┌─────────────▼──────────────┐
                  │   LandingPageComponent     │
                  │    (Main Composition)      │
                  └─────────────┬──────────────┘
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
      ┌─────▼────┐        ┌─────▼────┐       ┌─────▼────┐
      │  Header  │        │   Hero   │       │  About   │
      │ Component│        │Component │       │Component │
      └──────────┘        └──────────┘       └──────────┘
            │
       ┌────┴────────────────────────────┐
       │                                 │
   ┌───▼──────────┐          ┌──────────▼─────┐
   │  Business    │          │  Wealth        │
   │  Guardian    │          │  Guardian      │
   │  Component   │          │  Component     │
   └───┬──────────┘          └──────────┬─────┘
       │                               │
       │  ┌─────────────────────────────┤
       │  │                             │
   ┌───▼──────────────────────────────▼───┐
   │  ServiceCard Component (Reusable)    │
   │  • @Input title                      │
   │  • @Input description                │
   │  • @Input image                      │
   │  • @Input serviceId                  │
   │  • @Input delay (animation)          │
   └───┬──────────────────────────────────┘
       │
       └──► Rendered 18 times (Business)
       └──► Rendered 8 times (Wealth)

       ┌──────────────┐
       │   Contact    │
       │  Component   │
       └──────────────┘
            │
     ┌──────┴──────┐
     │             │
 ┌───▼──┐      ┌──▼───┐
 │ Info │      │ Form │
 │ Card │      │ Card │
 └──────┘      └──────┘
     │             │
     └─────┬───────┘
           │
       ┌───▼──────────┐
       │   Footer     │
       │  Component   │
       └──────────────┘
```

---

## 🔗 Dependency Injection Flow

```
AppComponent
    │
    └─► ActivatedRoute (from @angular/router)
    └─► AOS (from 'aos' library)

LandingPageComponent
    │
    └─► AnalyticsService (core/services)

BusinessGuardianComponent
    │
    └─► ServiceService
        │
        ├─ allServices[]
        ├─ getBusinessGuardianServices()
        └─ Returns: Observable<ServiceItem[]>

ServiceCard Component
    │
    └─ Receives via @Input properties
        ├─ title
        ├─ description
        ├─ image
        ├─ serviceId
        └─ delay

ContactComponent
    │
    ├─► FormBuilder (from @angular/forms)
    ├─► Validators (from @angular/forms)
    └─► ContactService
        │
        ├─ submitContactForm()
        ├─ sendEmail()
        ├─ sendWhatsApp()
        └─ formatPhoneNumber()
```

---

## 📊 Data Model Structure

```typescript
ServiceItem Interface
├─ id: string
│  Example: "gst-registration-compliance"
│
├─ title: string
│  Example: "GST Registration & Compliance"
│
├─ description: string
│  Example: "Comprehensive GST registration..."
│  (Used on card display - short version)
│
├─ longDescription: string
│  Example: "Comprehensive GST registration..."
│  (Used on detail page - full version)
│
├─ image: string
│  Example: "assets/images/GST.png"
│
├─ category: 'business' | 'wealth'
│  Used to filter services by type
│
└─ details?: string[]
   Example: ["Registration support", "Compliance guidance"]
```

---

## 🎬 Component Lifecycle

### During Page Load

```
1. index.html loads
2. main.ts bootstraps AppComponent
3. AppComponent.ngOnInit() → AOS.init()
4. Router loads LandingPageComponent
5. LandingPageComponent imports 8 feature components
6. Each component initializes:
   ├─ Header: Renders immediately
   ├─ Hero: Loads video (with fallback)
   ├─ About: Renders text
   ├─ BusinessGuardian:
   │  ├─ Calls ServiceService.getBusinessGuardianServices()
   │  ├─ Subscribes to Observable
   │  └─ Renders 10 ServiceCard components
   ├─ WealthGuardian:
   │  ├─ Calls ServiceService.getWealthGuardianServices()
   │  ├─ Subscribes to Observable
   │  └─ Renders 8 ServiceCard components
   ├─ Contact:
   │  ├─ Initializes ReactiveForm
   │  └─ Renders contact form
   └─ Footer: Renders immediately

7. AOS watches for elements entering viewport
8. Animations trigger as user scrolls
9. Page ready for interaction
```

---

## 🔄 Service Communication Pattern

### RxJS Observable Pattern Used

```typescript
// Service provides data stream
ServiceService {
  private businessServices$: Observable<ServiceItem[]> | null = null;
  
  getBusinessGuardianServices(): Observable<ServiceItem[]> {
    if (!this.businessServices$) {
      // Create only once, cache with shareReplay
      this.businessServices$ = of(
        this.allServices.filter(s => s.category === 'business')
      ).pipe(
        delay(150),           // Simulate network delay
        shareReplay(1)        // Share among subscribers
      );
    }
    return this.businessServices$;
  }
}

// Component subscribes
BusinessGuardianComponent {
  ngOnInit() {
    this.serviceService.getBusinessGuardianServices()
      .subscribe({
        next: (items) => {
          this.services = items;  // Update property
          // Template re-renders with new data
        },
        error: () => {
          this.services = [];  // Fallback
        }
      });
  }
}

// Template renders
<div *ngFor="let service of services">
  <app-service-card [title]="service.title" ...></app-service-card>
</div>
```

---

## 🎨 CSS Specificity & Scoping

```
Global Styles (styles.scss)
├─ Applied to: Entire app
├─ Priority: Lowest
└─ Used for: Base typography, resets

Component Scoped Styles
├─ Applied to: Only this component + children
├─ Priority: Medium
├─ ViewEncapsulation: Emulated (default)
│  └─ Angular adds unique attributes to selectors
│     Example: [_ngcontent-abc123]
└─ Example:
   .component {
     color: blue;  ← Only affects this component
   }

Bootstrap Utilities (via classes)
├─ Applied to: Elements with class
├─ Priority: High (important)
└─ Examples:
   <div class="py-5">     ← Padding Y axis
   <div class="text-center"> ← Center text
   <div class="col-lg-5">  ← Bootstrap grid
```

---

## 📦 Build Process

```
Source Code
├─ TypeScript (.ts)
├─ HTML (.html)
├─ SCSS (.scss)
└─ Assets (images, videos)
       │
       ├─ Angular CLI
       ├─ Webpack bundler
       ├─ TypeScript compiler
       └─ SCSS compiler
       │
       ▼
Bundled Output
├─ main-[hash].js        (Application code)
├─ polyfills-[hash].js   (Browser compatibility)
├─ styles-[hash].css     (Compiled CSS)
├─ index.html            (Entry point)
└─ assets/               (Images, videos)
       │
       ├─ Minification
       ├─ Tree-shaking
       ├─ Optimization
       └─ Compression (gzip)
       │
       ▼
Production Bundle (~79KB gzipped)
       │
       ├─ Deploy to GitHub Pages
       ├─ Deploy to Netlify
       ├─ Deploy to Vercel
       └─ Deploy to any static host
```

---

## 🔐 Security Layers

```
Client-Side (Angular)
├─ Template validation
├─ Form validators
├─ Input sanitization (if needed)
└─ XSS prevention

Network Layer
├─ HTTPS only
├─ CSP headers
└─ CORS headers

Server-Side (Backend required)
├─ Form validation again
├─ CSRF protection
├─ Rate limiting
└─ Email/WhatsApp API authentication
```

---

## 📱 Responsive Design Implementation

```
Device Detection: CSS @media queries
                 No JavaScript needed

Mobile Layout (<576px)
├─ 1 column grid
├─ Full width elements
├─ Hamburger menu
├─ Touch-friendly buttons
└─ Smaller fonts

Tablet Layout (576px - 992px)
├─ 2 column grid
├─ Flexible padding
├─ Menu visible/hamburger hybrid
└─ Medium fonts

Desktop Layout (>992px)
├─ 2 column grid for cards
├─ Side-by-side panels
├─ Full navigation menu
├─ Optimized spacing
└─ Standard fonts

Example:
.card {
  width: 100%;           // Mobile
  
  @media (min-width: 576px) {
    width: 50%;          // Tablet
  }
  
  @media (min-width: 992px) {
    width: 50%;          // Desktop (still 2 cols)
  }
}
```

---

## 🎯 User Journey

```
1. User visits https://yoursite.com
   ├─ Browser loads index.html
   └─ Angular app initializes

2. User sees full page
   ├─ Hero section (video)
   ├─ About section
   ├─ Business services
   ├─ Wealth services
   ├─ Contact section
   └─ Footer

3. User scrolls down
   ├─ AOS detects scroll
   ├─ Animations trigger (fade-up)
   └─ Cards appear with staggered timing

4. User clicks Contact form
   ├─ Form loads
   ├─ User enters data
   ├─ Validation happens real-time
   ├─ User submits
   └─ Form validation runs
       ├─ If valid: Send to backend
       ├─ If invalid: Show errors
       └─ Reset form on success

5. User clicks navigation link
   ├─ Smooth scroll to section
   ├─ URL updates with anchor
   └─ No page reload (SPA)

6. User closes browser
   ├─ App state lost
   └─ Fresh load on next visit
```

---

## 🔧 Maintenance Tasks

### Weekly
- [ ] Monitor build logs
- [ ] Check error reports

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Audit security: `npm audit`
- [ ] Check performance metrics
- [ ] Review analytics data

### Quarterly
- [ ] Update to latest Angular patch
- [ ] Review and optimize images
- [ ] Update content in ServiceService
- [ ] Test on multiple devices

### Annually
- [ ] Major version updates
- [ ] Full accessibility audit
- [ ] Performance optimization
- [ ] SEO review

---

## 📞 Support & Debugging

### Enable Debug Mode
```typescript
// Add to main.ts
import { enableDebugTools } from '@angular/platform-browser';
enableDebugTools(componentRef);
```

### View Component State (Browser Console)
```javascript
// Find component in DOM
ng.probe($0).componentInstance
ng.probe($0).componentInstance.services
```

### Check Network Requests
1. Open DevTools: F12
2. Network tab
3. Look for failed requests
4. Check response codes

### Check Performance
```
DevTools → Performance tab
1. Record
2. Perform action (scroll, click, etc.)
3. Stop recording
4. Analyze flame chart
```

---

## 📚 File Relationships

```
app.component.ts
├─ imports: RouterOutlet
├─ template: <router-outlet></router-outlet>
├─ calls: AOS.init()
└─ loads: LandingPageComponent via routes

app.routes.ts
├─ route: '' → LandingPageComponent
└─ route: '**' → redirect to ''

landing-page.component.ts
├─ imports: 8 feature components
├─ imports: CommonModule
├─ imports: AnalyticsService
└─ composes: All sections

header/component.ts
├─ template: Navigation markup
├─ styles: Header styling
├─ imports: RouterLink
└─ features: Sticky positioning

service.service.ts
├─ exports: allServices[]
├─ methods: getBusinessGuardianServices()
├─ methods: getWealthGuardianServices()
└─ caching: Via shareReplay()
```

---

## 🚀 Performance Budget

```
Bundle Size Goals:
├─ main.js:      < 200KB (uncompressed)
├─ styles.css:   < 50KB
├─ polyfills.js: Auto-managed by Angular
└─ Total:        ~79KB (gzipped)

Current Status:
├─ main.js:      72.31 KB
├─ styles.css:   1.39 KB
├─ polyfills.js: 90.20 KB
└─ Total:        163.89 KB (development)
└─ Gzipped:      ~79KB

Metrics to Monitor:
├─ Time to Interactive (TTI)
├─ First Contentful Paint (FCP)
├─ Largest Contentful Paint (LCP)
└─ Cumulative Layout Shift (CLS)

Tools:
├─ Lighthouse
├─ WebPageTest
└─ Chrome DevTools
```

---

**Architecture Version**: 1.0  
**Compatible With**: Angular 18+  
**Last Updated**: 2026-08-18
