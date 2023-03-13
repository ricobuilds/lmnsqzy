import { domains } from "~/general";

export interface Order {
  type: domains;
  id: string
  attributes: {
    store_id: number;
    identifier: string;
    order_number: number;
    user_name: string;
    user_email: string;
    currency: string;
    currency_rate: string;
    subtotal: number;
    discount_total: number;
    tax: number;
    total: number;
    subtotal_usd: number;
    discount_total_usd: number;
    tax_usd: number;
    total_usd: number;
    tax_name: string;
    tax_rate: string;
    status: string;
    status_formatted: string;
    refunded: number;
    refunded_at: string | null;
    subtotal_formatted: string;
    discount_total_formatted: string;
    tax_formatted: string;
    total_formatted: string;
    first_order_item: {
      id: number;
      order_id: number;
      product_id: number;
      variant_id: number;
      product_name: string;
      variant_name: string;
      price: number;
      created_at: string;
      updated_at: string;
      test_mode: boolean;
    };
    created_at: string;
    updated_at: string;
  };
  relationships: {
    store: Links;
    'order-items': Links;
    subscriptions: Links;
    'license-keys': Links;
  };
  links: {
    self: string;
  };
}

interface Links {
  links: {
    related: string;
    self: string;
  };
}
