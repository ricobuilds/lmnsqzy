import { domains } from "~/general";

export interface Subscription {
  "type": domains,
  "id": string,
  "attributes": {
    "store_id": number,
    "order_id": number,
    "order_item_id": number,
    "product_id": number,
    "variant_id": number,
    "product_name": string,
    "variant_name": string,
    "user_name": string,
    "user_email": string,
    "status": string,
    "status_formatted": string,
    "pause": string | null,
    "cancelled": boolean,
    "trial_ends_at": string | null,
    "billing_anchor": number,
    "urls": {
      "update_payment_method": number
    },
    "renews_at": string,
    "ends_at": string | null,
    "created_at": string,
    "updated_at": string,
    "test_mode": boolean
  }
  relationships: Relationships;
  links: {
    self: string;
  };
}

interface Relationships<Links = {
  links: {
    related: string
    self: string
  }
}> {
  store: Links
  order: Links
  'order-item': Links
  product: Links
  variant: Links
  'subscription-invoices': Links
}
