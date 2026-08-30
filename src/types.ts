export interface ServiceItem {
  id: string;
  title: string;
  category: 'business' | 'wealth' | 'international';
  description: string;
  badge?: string;
  features?: string[];
  imageKey?: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'QuickBooks' | 'Xero' | 'Government';
  level: string;
  recipient: string;
  issueDate: string;
  signatory?: string;
  description: string;
  certNumber?: string;
  pdfIndex?: number;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  decimals?: number;
}

export interface TechPlatform {
  name: string;
  category: 'accounting' | 'workflow' | 'document';
  description: string;
  highlight: string;
  popularFor: string;
}
