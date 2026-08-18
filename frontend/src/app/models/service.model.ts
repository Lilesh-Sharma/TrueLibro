export type ServiceCategory = 'business' | 'wealth';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ServiceCategory;
  details?: string[];
}
