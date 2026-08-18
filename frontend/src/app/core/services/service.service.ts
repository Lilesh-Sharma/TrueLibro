import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, shareReplay } from 'rxjs/operators';
import { ServiceItem } from '../../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private businessServices$: Observable<ServiceItem[]> | null = null;
  private wealthServices$: Observable<ServiceItem[]> | null = null;

  private readonly allServices: ServiceItem[] = [
    {
      id: 'gst-registration-compliance',
      title: 'GST Registration & Compliance',
      description: 'Comprehensive GST registration and compliance solutions to ensure your business adheres to all regulations.',
      longDescription:
        'Comprehensive GST registration and compliance solutions to ensure your business adheres to all regulations while maintaining smooth operational efficiency and filing accuracy.',
      image: 'assets/images/GST.png',
      category: 'business',
      details: ['Registration support', 'Monthly/quarterly returns', 'Compliance guidance'],
    },
    {
      id: 'company-registration-compliance',
      title: 'Company Registration & Compliance',
      description: 'We provide comprehensive assistance with company registration and ongoing compliance obligations, making it easy for you to navigate the legal requirements and focus on your business growth.',
      longDescription:
        'We provide comprehensive assistance with company registration and ongoing compliance obligations, making it easy for you to navigate legal requirements and focus on business growth.',
      image: 'assets/images/company reg.jpg',
      category: 'business',
      details: ['Entity formation', 'Annual return filings', 'Legal support'],
    },
    {
      id: 'taxation',
      title: 'Taxation',
      description: 'Taxation service provides expert assistance with tax planning and compliance, helping individuals and business navigate the complexities of tax laws and regulations.',
      longDescription:
        'Taxation service provides expert assistance with tax planning and compliance, helping individuals and businesses navigate the complexities of tax laws and regulations.',
      image: 'assets/images/TAX.png',
      category: 'business',
      details: ['Tax planning', 'Return filing', 'Strategic advice'],
    },
    {
      id: 'accounting-bookkeeping',
      title: 'Accouting & Bookkeeping',
      description: 'We offers accurate and dependable accounting and bookkeepping services to ensure your business records are always up to date. Note: As per legal requirements, it is mandatory to maintain your books of accounts for a minimum of 7 years.',
      longDescription:
        'We offers accurate and dependable accounting and bookkeepping services to ensure your business records are always up to date. Note: As per legal requirements, it is mandatory to maintain your books of accounts for a minimum of 7 years.',
      image: 'assets/images/Accounting.jpg',
      category: 'business',
      details: ['Bookkeeping', 'Ledger maintenance', 'Financial reporting'],
    },
    {
      id: 'fssai',
      title: 'FSSAI',
      description: 'The Food Safety and Standards Authority of India (FSSAI) is responsible for regulating food safety in India. Business in the food industry must register or obtain a license with FSSAI based on their size and turnover.',
      longDescription:
        'The Food Safety and Standards Authority of India (FSSAI) is responsible for regulating food safety in India. Business in the food industry must register or obtain a license with FSSAI based on their size and turnover.',
      image: 'assets/images/FSSAI.png',
      category: 'business',
      details: ['License registration', 'Food safety compliance', 'Documentation', 'Renewals'],
    },
    {
      id: 'msme-udyog-aadhar',
      title: 'MSME-Udyog Aadhar',
      description: 'SME registration helps businesses give recognition, legal benefits and access to government schemes. Compliance ensures that the business operates within the legal framework, avoids penalties and enjoy the benefits of beng a registered entity.',
      longDescription:
        'SME registration helps businesses give recognition, legal benefits and access to government schemes. Compliance ensures that the business operates within the legal framework, avoids penalties and enjoy the benefits of beng a registered entity.',
      image: 'assets/images/msme.jpg',
      category: 'business',
      details: ['Benefits access', 'Scheme eligibility', 'Compliance support'],
    },
    {
      id: 'import-export-licence',
      title: 'Import & Export Licence',
      description: 'The Import Export Code (IEC) is a crucial registration for business that wish to engage in international trade. It provides credebility, enables smoother cross border transactions and grant access to government schemes aimed at boosting export activities.',
      longDescription:
        'The Import Export Code (IEC) is a crucial registration for business that wish to engage in international trade. It provides credebility, enables smoother cross border transactions and grant access to government schemes aimed at boosting export activities.',
      image: 'assets/images/IEC.jpg',
      category: 'business',
      details: ['IEC registration', 'International trade support', 'Banking facilitation'],
    },
    {
      id: 'trade-mark',
      title: 'Trade Mark',
      description: 'Trademark service provide businesses with a means to protect their brand identity and differentiate themselves in the marketplace. Registration a trademark is essential for safegaurding intellectual property, maintaining brand value and ensuring long term legal protection.',
      longDescription:
        'Trademark service provide businesses with a means to protect their brand identity and differentiate themselves in the marketplace. Registration a trademark is essential for safegaurding intellectual property, maintaining brand value and ensuring long term legal protection.',
      image: 'assets/images/TM.jpg',
      category: 'business',
      details: ['Brand protection', 'Registration', 'IP guidance'],
    },
    {
      id: 'other-services',
      title: 'Other Services',
      description: 'Digital signature, PAN card, E-way bills, CMA reports, GeM registration, Letter of Undeertaking (LUT) File, Registration Under Shop & Establishment Act, Project Reports & many more in Buckets.',
      longDescription:
        'Digital signature, PAN card, E-way bills, CMA reports, GeM registration, Letter of Undertaking (LUT), registration under the Shop & Establishment Act, project reports, and many more services.',
      image: 'assets/images/other-services.png',
      category: 'business',
      details: ['PAN support', 'Digital signatures', 'Project reports'],
    },
    {
      id: 'digital-services',
      title: 'Digital Services',
      description: 'Modern digital business tools and support for online compliance and operations.',
      longDescription:
        'We help businesses improve their digital presence, streamline processes, and stay compliant with online filing and governance requirements through efficient digital solutions.',
      image: 'assets/images/digital sig.png',
      category: 'business',
      details: ['Digital compliance', 'Online documentation', 'Process automation'],
    },
    {
      id: 'protection-plans',
      title: 'Protection Plans',
      description: 'We offer flexible Protection Plans that are tailored to meet your specific needs and budget.',
      longDescription:
        'We offer flexible Protection Plans that are tailored to meet your specific needs and budget, helping secure your financial well-being and peace of mind.',
      image: 'assets/images/Protection.jpg',
      category: 'wealth',
      details: ['Risk coverage', 'Customised planning', 'Budget-friendly options'],
    },
    {
      id: 'wealth-creation-plans',
      title: 'Wealth Creation Plans',
      description: 'Expert guidance on personal finance and wealth management for a secure future.',
      longDescription:
        'Expert guidance on personal finance and wealth management, helping individuals secure and grow their financial future through well-structured plans and strategic investments.',
      image: 'assets/images/wealth.jpg',
      category: 'wealth',
      details: ['Portfolio planning', 'Long-term growth', 'Financial strategy'],
    },
    {
      id: 'saving-plans',
      title: 'Saving Plans',
      description: 'Saving Plans empower you to make informed decisions about your savings, ensuring a secure and prosperous future.',
      longDescription:
        'Saving Plans empower you to make informed decisions about your savings, ensuring a secure and prosperous future while aligning with your life goals.',
      image: 'assets/images/saving.jpg',
      category: 'wealth',
      details: ['Goal-based saving', 'Secure growth', 'Smart budgeting'],
    },
    {
      id: 'child-plans',
      title: 'Child Plans',
      description: 'Invest in your child\'s dreams and aspirations with your tailored child plans.',
      longDescription:
        'Invest in your child’s dreams and aspirations with tailored child plans designed to support education, milestones, and long-term financial security.',
      image: 'assets/images/child.jpg',
      category: 'wealth',
      details: ['Education funding', 'Milestone planning', 'Future security'],
    },
    {
      id: 'retirement-plans',
      title: 'Retirement Plans',
      description: 'Take control of your future with our comprehensive retirement planning services.',
      longDescription:
        'Take control of your future with comprehensive retirement planning services that help you build financial stability well before retirement.',
      image: 'assets/images/retirement.jpg',
      category: 'wealth',
      details: ['Retirement planning', 'Income security', 'Post-retirement stability'],
    },
    {
      id: 'health-insurance',
      title: 'Health Insurance',
      description: 'Our health insurance service provides comprehensive coverage for medical expenses, ensuring you and your family receive the care you need.',
      longDescription:
        'Our health insurance service provides comprehensive coverage for medical expenses, ensuring you and your family receive the care you need.',
      image: 'assets/images/health.jpg',
      category: 'wealth',
      details: ['Hospitalisation cover', 'Cashless support', 'Family benefits'],
    },
    {
      id: 'vehicle-insurance',
      title: 'Vehicle Insurance',
      description: 'Vehicle insurance offers financial protection against accidents, theft, and liabilities, with options for add-ons and cashless repairs. Get insurance quotations up to 35% off with True Libro\'s expert guidance to select the best coverage.',
      longDescription:
        'Vehicle insurance offers financial protection against accidents, theft, and liabilities, with options for add-ons and cashless repairs. Get insurance quotations up to 35% off with True Libro\'s expert guidance to select the best coverage.',
      image: 'assets/images/Vehicle.png',
      category: 'wealth',
      details: ['Accident cover', 'Theft protection', 'Add-on options'],
    },
    {
      id: 'loan-services',
      title: 'Loan Services',
      description: 'Empower Your Future with Smart Finance Solutions. True LIBRO bridges the gap between you and financial institutions, securing funds for your home, business, personal, and credit card needs.',
      longDescription:
        'Empower Your Future with Smart Finance Solutions. True LIBRO bridges the gap between you and financial institutions, securing funds for your home, business, personal, and credit card needs.',
      image: 'assets/images/loan.jpg',
      category: 'wealth',
      details: ['Home loans', 'Business funding', 'Personal finance'],
    },
  ];

  getBusinessGuardianServices(): Observable<ServiceItem[]> {
    if (!this.businessServices$) {
      this.businessServices$ = of(
        this.allServices.filter((service) => service.category === 'business')
      ).pipe(delay(150), shareReplay(1));
    }

    return this.businessServices$;
  }

  getWealthGuardianServices(): Observable<ServiceItem[]> {
    if (!this.wealthServices$) {
      this.wealthServices$ = of(
        this.allServices.filter((service) => service.category === 'wealth')
      ).pipe(delay(150), shareReplay(1));
    }

    return this.wealthServices$;
  }

  getServiceById(id: string): Observable<ServiceItem> {
    const match = this.allServices.find((service) => service.id === id);

    if (!match) {
      return throwError(() => new Error(`Service not found: ${id}`));
    }

    return of(match).pipe(delay(100));
  }

  searchServices(query: string): Observable<ServiceItem[]> {
    if (!query || !query.trim()) {
      return of(this.allServices);
    }

    const normalizedQuery = query.toLowerCase().trim();
    const results = this.allServices.filter((service) =>
      service.title.toLowerCase().includes(normalizedQuery) ||
      service.description.toLowerCase().includes(normalizedQuery) ||
      service.longDescription.toLowerCase().includes(normalizedQuery)
    );

    return of(results).pipe(delay(100));
  }
}
