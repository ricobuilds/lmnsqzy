import { domains } from '~/general';

export interface Customer {
  type: domains;
  id: string;
  attributes: {
    store_id: number;
    name: string;
    email: string;
    status: string;
    city: string | null;
    region: string | null;
    country: string;
    total_revenue_currency: number;
    mrr: number;
    status_formatted: string;
    country_formatted: string;
    total_revenue_currency_formatted: string;
    mrr_formatted: string;
    created_at: string;
    updated_at: string;
    test_mode: boolean;
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
  store: ILinks;
  order: ILinks;
  subscriptions: ILinks;
  'license-keys': ILinks;
}
