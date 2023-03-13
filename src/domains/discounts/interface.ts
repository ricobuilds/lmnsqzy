import { domains } from '~/general';

export interface Discount {
  type: domains;
  id: string;
  attributes: {
    store_id: number;
    name: string;
    code: string;
    amount: number;
    amount_type: string;
    is_limited_to_products: boolean;
    is_limited_redemptions: boolean;
    max_redemptions: number;
    starts_at: string | null;
    expires_at: string | null;
    duration: string;
    duration_in_months: number;
    status: string;
    status_formatted: string;
    created_at: string;
    updated_at: string;
  };
  relationships: Relationships;
  links: {
    self: string;
  };
}

interface Relationships<
  Links = {
    links: {
      related: string;
      self: string;
    };
  }
> {
  store: Links;
  variants: Links;
  'discount-redemptions': Links;
}
