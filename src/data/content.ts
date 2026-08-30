import { ServiceItem, CertificationItem, StatItem, TechPlatform } from '../types';

export const BUSINESS_INFO = {
  name: 'True Libro',
  tagline: 'Your Trusted Partner in Finance, Tax Compliance, and Wealth Creation',
  motto: 'Business is Vision, Accounting is Foundation',
  about: 'True Libro provides high-quality tax, accounting, and financial advisory services to individuals and small-to-medium businesses across various industries, along with business consultancy services to help clients grow and succeed.',
  teamDescription: 'A dedicated panel of professionals including Chartered Accountants, Company Secretaries, Senior Advocates, Professional Accountants, and Expert Insurance Advisors.',
  contact: {
    address: 'Khorabar Urf Soobabazar, Uttar Pradesh, India (Near Dayanand Inter College, Deoria Road, Gorakhpur - 273010)',
    phone: '+91-8318435728',
    phoneFormatted: '+91 83184 35728',
    whatsapp: '918318435728',
    email: 'truelibroca@gmail.com',
    website: 'TrueLibro.com',
    hours: {
      weekdays: 'Monday – Saturday: 10:00 AM – 8:00 PM',
      sunday: 'Sunday: 11:00 AM – 5:00 PM',
    },
    locationBadge: 'India | Supporting Australian & International Clients',
  },
  credentials: [
    'Udyam Registered SME',
    'GST Practitioner Certified',
    'PAN Registered Business Entity',
    'Mandatory 7-Year Books Retention Standard',
  ]
};

export const HERO_STATS: StatItem[] = [
  { value: 99.8, suffix: '%', label: 'Reconciliation Accuracy', sublabel: 'Standardized quality checks', decimals: 1 },
  { value: 100, suffix: '%', label: 'On-Time BAS & GST Filing', sublabel: 'Zero penalty track record' },
  { value: 7, suffix: '+ Yrs', label: 'Books Retention Guarantee', sublabel: 'Compliant statutory archival' },
  { value: 35, prefix: 'Up to ', suffix: '%', label: 'Insurance Savings', sublabel: 'Optimized policy premium rates' },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'qbo-l2',
    title: 'QuickBooks Online Certification Level 2',
    issuer: 'QuickBooks',
    level: 'Level 2 - ProAdvisor Advanced',
    recipient: 'Santosh Thakur',
    issueDate: '08 June 2022',
    validity: '1 October 2025',
    signatory: 'Michael O’Sullivan (Customer Training Manager)',
    description: 'Certified expertise in complex reconciliations, multi-currency reporting, advanced chart of accounts, and custom management reports in Intuit QuickBooks.',
  },
  {
    id: 'qbo-l1',
    title: 'QuickBooks Online Certification',
    issuer: 'QuickBooks',
    level: 'Level 1 - Certified ProAdvisor',
    recipient: 'Santosh Thakur',
    issueDate: '24 May 2022',
    signatory: 'Lars Leber (VP Country Manager Australia)',
    description: 'Australian bookkeeping workflows, transaction review, AP/AR processing, and bank feed management.',
  },
  {
    id: 'xero-l2',
    title: 'Xero Certified Professional Level 2',
    issuer: 'Xero',
    level: 'Level 2 - Certified Professional',
    recipient: 'Santosh Thakur',
    issueDate: '30/09/2025',
    validity: '24/09/2026',
    signatory: 'Vikki Bean (GM - Education & Content Delivery, Xero)',
    description: 'Comprehensive Xero mastery covering month-end reviews, payroll integrations, fixed asset registers, and Australian BAS reconciliation.',
  },
  {
    id: 'xero-l1',
    title: 'Xero Certified Associate Level 1',
    issuer: 'Xero',
    level: 'Level 1 - Certified Associate',
    recipient: 'Santosh Thakur',
    issueDate: '30/09/2025',
    validity: '24/09/2026',
    signatory: 'Vikki Bean (GM - Education & Content Delivery, Xero)',
    description: 'Core Xero competencies including bank feeds, sales invoices, bills matching, and standard ledger reconciliations.',
  },
];

export const BUSINESS_GUARDIAN_SERVICES: ServiceItem[] = [
  {
    id: 'gst-compliance',
    title: 'GST Registration & Compliance',
    category: 'business',
    badge: 'Statutory Essential',
    description: 'Comprehensive solutions for regulatory adherence, return filing, input tax credit (ITC) reconciliation, and audit support.',
    features: ['New GST Registration & Amendments', 'GSTR-1, GSTR-3B & GSTR-9 Annual Filing', 'ITC 2A/2B Reconciliation & Dispute Resolution', 'LUT (Letter of Undertaking) Filing for Exporters'],
  },
  {
    id: 'company-reg',
    title: 'Company Registration & Corporate Legal',
    category: 'business',
    badge: 'Startup & Growth',
    description: 'End-to-end assistance with Pvt Ltd, LLP, OPC incorporation, MCA filings, and statutory compliance.',
    features: ['Private Limited, LLP & OPC Registration', 'ROC Compliance & Annual Filing (AOC-4, MGT-7)', 'Director KYC & DIN Management', 'Share Allotment & Board Resolution Drafting'],
  },
  {
    id: 'taxation-planning',
    title: 'Direct & Indirect Taxation',
    category: 'business',
    badge: 'CA Backed',
    description: 'Expert strategic tax planning, corporate ITR filing, TDS return management, and notice handling.',
    features: ['Corporate & Individual Income Tax (ITR)', 'TDS / TCS Calculation & Quarterly Returns (24Q, 26Q)', 'Advance Tax Planning & Assessment Representation', 'Tax Saving Strategies under current Finance Acts'],
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    category: 'business',
    badge: '7-Year Archival',
    description: 'Accurate and dependable record maintenance with mandatory books of accounts maintained for a minimum of 7 years.',
    features: ['Day-to-day Transaction Posting & Ledger Maintenance', 'Bank & Credit Card Reconciliation', 'Profit & Loss and Balance Sheet Preparation', 'Cash Flow & MIS Reporting for Management'],
  },
  {
    id: 'fssai-license',
    title: 'FSSAI Food License Registration',
    category: 'business',
    badge: 'Food Industry',
    description: 'Registration and state/central licensing for food industry businesses based on scale and annual turnover.',
    features: ['Basic FSSAI Registration', 'State & Central FSSAI License Procurement', 'Annual Return Compliance (Form D-1)', 'Modification & Renewal Assistance'],
  },
  {
    id: 'msme-udyam',
    title: 'MSME - Udyam Aadhar Registration',
    category: 'business',
    badge: 'Govt Benefits',
    description: 'SME registration for official recognition, legal benefits, priority sector lending, and government subsidies.',
    features: ['Udyam Certificate Generation', 'Collateral-free Loan Priority Scheme Access', 'Subsidy on Patent & Trademark Filing', 'Protection against Delayed Payments from Buyers'],
  },
  {
    id: 'iec-trade',
    title: 'Import & Export License (IEC)',
    category: 'business',
    badge: 'Global Trade',
    description: 'Crucial DGFT registration for international commerce, customs clearance, and global business expansion.',
    features: ['DGFT Import Export Code Issuance', 'AD Code Registration with Customs Ports', 'Export Promotion Council RCMC Support', 'Annual IEC Renewal & Modification'],
  },
  {
    id: 'trademark-ip',
    title: 'Trademark & IP Protection',
    category: 'business',
    badge: 'Brand Shield',
    description: 'Protection for brand identity, logos, slogans, and intellectual property against infringement.',
    features: ['Comprehensive Trademark Search & Class Selection', 'Online TM-A Filing & Examination Reply', 'Trademark Objection & Hearing Representation', 'Copyright & Design Protection Advisory'],
  },
  {
    id: 'other-biz-services',
    title: 'Ancillary Business Registrations',
    category: 'business',
    badge: 'Fast-Track',
    description: 'Turnkey assistance for digital signatures, CMA bank reports, GeM portal, and local regulatory compliances.',
    features: ['Class 3 Digital Signature Certificates (DSC)', 'Bank Loan CMA Project Reports & Projections', 'Government e-Marketplace (GeM) Registration', 'Shop & Establishment Act & Trade Licenses'],
  },
];

export const WEALTH_GUARDIAN_SERVICES: ServiceItem[] = [
  {
    id: 'protection-plans',
    title: 'Protection & Term Insurance',
    category: 'wealth',
    badge: 'Family Security',
    description: 'Flexible life and income protection plans tailored to your specific family milestones and budget.',
    features: ['High-Cover Term Life Insurance', 'Critical Illness & Disability Riders', 'Zero-Cost Return of Premium (TROP) Options', 'Keyman Insurance for Business Owners'],
  },
  {
    id: 'wealth-creation',
    title: 'Wealth Creation & Portfolio Strategies',
    category: 'wealth',
    badge: 'Long-Term Growth',
    description: 'Tailored investment strategies to compound wealth and secure future financial freedom.',
    features: ['Goal-Based Mutual Fund Portfolio Design', 'Systematic Investment Plans (SIP) Strategy', 'Direct Equity & Hybrid Allocation Guidance', 'Inflation-Beating Capital Appreciation Roadmaps'],
  },
  {
    id: 'saving-plans',
    title: 'Guaranteed Saving Plans',
    category: 'wealth',
    badge: 'Capital Safety',
    description: 'Disciplined savings products offering predictable returns, tax benefits, and capital preservation.',
    features: ['Guaranteed Return Endowment Plans', 'Tax-Free Maturity under Section 10(10D)', 'Systematic Monthly Cashflow Plans', 'Emergency Contingency Fund Structuring'],
  },
  {
    id: 'child-future',
    title: 'Child Education & Marriage Plans',
    category: 'wealth',
    badge: 'Future Dreams',
    description: 'Dedicated investment blueprints designed to fund higher education and milestone life events.',
    features: ['Higher Education Inflation-Indexed Corpus Planning', 'Waiver of Premium (WOP) Safeguards', 'Milestone-Based Partial Withdrawal Triggers', 'Global University Cost Hedging'],
  },
  {
    id: 'retirement-plans',
    title: 'Retirement & Pension Solutions',
    category: 'wealth',
    badge: 'Peace of Mind',
    description: 'Comprehensive retirement blueprints ensuring regular inflation-adjusted pension income for life.',
    features: ['National Pension System (NPS) Advisory', 'Immediate & Deferred Annuity Structuring', 'Post-Retirement Tax-Efficient Withdrawal', 'Medical Inflation Buffer Integration'],
  },
  {
    id: 'health-insurance',
    title: 'Comprehensive Health Insurance',
    category: 'wealth',
    badge: 'Medical Shield',
    description: 'Broad hospitalisation coverage with cashless network hospitals and zero room rent sub-limits.',
    features: ['Family Floater & Senior Citizen Health Covers', '100% Cashless Hospitalisation Network', 'No Claim Bonus (NCB) Multiplier Protection', 'Restoration Benefit for Unrelated Illnesses'],
  },
  {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance (Up to 35% Off)',
    category: 'wealth',
    badge: 'Up to 35% Off',
    description: 'Comprehensive motor insurance for private cars, bikes, and commercial fleets with premium quotations.',
    features: ['Up to 35% Discount on Comprehensive Premiums', 'Zero Depreciation & Engine Protect Add-ons', '24x7 Roadside Assistance & Towing Cover', 'Instant Digital Policy Issuance & Claims Support'],
  },
  {
    id: 'loan-services',
    title: 'Smart Loan & Debt Advisory',
    category: 'wealth',
    badge: 'Best Rates',
    description: 'Connecting you with leading banks and NBFCs for home, business, mortgage, education, and personal loans.',
    features: ['Home Loan & Balance Transfer with Low ROI', 'Collateral-Free SME Business Loans', 'Mortgage & Loan Against Property (LAP)', 'Education & Instant Personal Finance Solutions'],
  },
];

export const AUSTRALIAN_SUPPORT_ITEMS = [
  'Xero Cloud Bookkeeping & Bank Feeds',
  'QuickBooks Online (QBO) Ledger Management',
  'MYOB AccountRight & Essentials Support',
  'SaaSu Cloud Accounting Workflows',
  'Bank & Credit Card Clearing Reconciliations',
  'GST Coding & Transaction Review',
  'BAS (Business Activity Statement) Preparation Support',
  'Accounts Payable (AP) & Supplier Bill Processing',
  'Accounts Receivable (AR) & Invoice Generation',
  'Payroll Bookkeeping & Superannuation Support',
  'Month-End & Year-End Workpapers',
  'Historical Bookkeeping Catch-Up & Cleanup',
  'Accounting Software Migration & Chart of Accounts Setup',
  'Document Management via Hubdoc & Dext',
];

export const TECH_PLATFORMS: TechPlatform[] = [
  {
    name: 'Xero',
    category: 'accounting',
    highlight: 'Certified Professional Partner',
    description: 'Bank rules automation, multi-currency journals, fixed assets, and custom financial statements.',
    popularFor: 'Australian & UK Practices',
  },
  {
    name: 'QuickBooks Online',
    category: 'accounting',
    highlight: 'Level 2 Certified ProAdvisor',
    description: 'Vendor bill management, class tracking, customer invoicing, and balance sheet integrity.',
    popularFor: 'Global & US/AU Businesses',
  },
  {
    name: 'MYOB',
    category: 'accounting',
    highlight: 'Practiced Workflow',
    description: 'Full bookkeeping, inventory items, payroll journals, and BAS support in MYOB Business.',
    popularFor: 'Australian Accounting Firms',
  },
  {
    name: 'SaaSu',
    category: 'accounting',
    highlight: 'Expert Navigation',
    description: 'Web service integrations, automated recurring entries, and transactional reconciliations.',
    popularFor: 'SaaS & E-commerce Operations',
  },
  {
    name: 'Tally Prime',
    category: 'accounting',
    highlight: 'Statutory Core',
    description: 'Indian accounting standard compliance, GST E-invoicing, E-way bill generation, and inventory.',
    popularFor: 'Domestic Indian Enterprises',
  },
  {
    name: 'Hubdoc',
    category: 'document',
    highlight: 'Automated Ingestion',
    description: 'Auto-fetching bank statements and receipts with automatic data push into Xero/QBO.',
    popularFor: 'Paperless Accounting',
  },
  {
    name: 'Dext (Receipt Bank)',
    category: 'document',
    highlight: 'High Precision OCR',
    description: 'Line-item extraction, supplier rule matching, and seamless document archiving.',
    popularFor: 'Audit-Proof Document Flow',
  },
];

export const PARTNERSHIP_STEPS = [
  {
    step: '01',
    title: 'Understand Your Requirements',
    description: 'We conduct a structured discovery session to understand your accounting software, practice volume, chart of accounts, and turnaround expectations.',
  },
  {
    step: '02',
    title: 'Define the Scope & SLA',
    description: 'We formalize client assignments, specific tasks (AP/AR, reconciliations, BAS support), timeline SLAs, and review checkpoints.',
  },
  {
    step: '03',
    title: 'Integrate With Your Workflow',
    description: 'Our team plugs directly into your existing cloud accounting platform (Xero/QBO/MYOB) and communication channels without altering your firm’s DNA.',
  },
  {
    step: '04',
    title: 'Deliver & Multi-Tier Review',
    description: 'All bookkeeping is processed with strict double-entry verification, reconciliations, and review by qualified senior accounting professionals.',
  },
  {
    step: '05',
    title: 'Scale On Demand',
    description: 'Effortlessly scale up bookkeeping hours or assign new client portfolios during peak tax season without increasing in-house overhead.',
  },
];

export const WHO_WE_SUPPORT = [
  {
    title: 'Accounting & CA Firms',
    desc: 'Offshore bookkeeping capacity so partners can focus on high-margin tax, advisory, and client relationships.',
    icon: 'Building2',
  },
  {
    title: 'Small & Medium Businesses',
    desc: 'Reliable, full-cycle bookkeeping without the fixed payroll overhead of an in-house accounting department.',
    icon: 'Briefcase',
  },
  {
    title: 'Startups & Growing Ventures',
    desc: 'Clean financial books, investor-ready MIS reports, and compliance hygiene from day one.',
    icon: 'TrendingUp',
  },
  {
    title: 'Consultants & Agencies',
    desc: 'Flexible invoice tracking, cashflow management, and GST/tax optimization for service professionals.',
    icon: 'Users',
  },
];

export const FAQS = [
  {
    q: 'How does TrueLibro support Australian accounting practices?',
    a: 'We have hands-on experience supporting Australian workflows, including Xero, QBO, and MYOB bookkeeping, bank reconciliations, GST coding, payroll transaction support, and BAS-related workpaper preparation under your practice’s review guidelines.',
  },
  {
    q: 'Are your accounting professionals certified?',
    a: 'Yes! Our team holds Xero Certified Professional Level 2, Xero Certified Associate Level 1, QuickBooks Online Certified Level 1 & Level 2 ProAdvisor credentials, alongside qualifications from Chartered Accountants and Company Secretaries.',
  },
  {
    q: 'How long are books of accounts maintained?',
    a: 'We follow a strict policy of maintaining mandatory books of accounts and supporting documentation for a minimum of 7 years in full compliance with corporate and tax laws.',
  },
  {
    q: 'Can we get up to 35% discount on vehicle insurance?',
    a: 'Yes! Through our Wealth Guardian insurance vertical, we compare quotations across top IRDAI-approved insurance providers to secure discounts of up to 35% on comprehensive motor insurance premiums.',
  },
  {
    q: 'How do we start an offshore bookkeeping partnership?',
    a: 'You can request a consultation via our form, call +91-8318435728, or email truelibroca@gmail.com. We will set up a quick 20-minute workflow review and pilot project.',
  },
];
