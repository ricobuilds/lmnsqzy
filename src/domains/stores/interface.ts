import { domains } from '~/general';

export interface Store {
  type: domains;
  id: string;
  attributes: {
    name: string;
    slug: string;
    domain: string;
    url: string;
    avatar_url: string;
    plan: string;
    country: string;
    country_nicename: string;
    currency: string;
    total_sales: number;
    total_revenue: number;
    thirty_day_sales: number;
    thirty_day_revenue: number;
    created_at: string;
    updated_at: string;
  };
  relationships: Relationships;
  links: {
    self: string;
  };
}

interface Relationships<
  ILinks = {
    links: {
      related: string;
      self: string;
    };
  }
> {
  products: ILinks;
  orders: ILinks;
  subscriptions: ILinks;
  discounts: ILinks;
  'license-keys': ILinks;
}
