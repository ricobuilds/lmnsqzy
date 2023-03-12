import { domains } from '~/general';

export interface Store<
  ILink = {
    self: string;
  }
> {
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
  };
  relationships: IGetStoreRelationships;
  links: ILink;
}

interface IGetStoreRelationships<
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
