export interface Subscription {
  type: string;
  id: string;
  attributes: {
    order_id: number;
    product_id: number;
    variant_id: number;
    product_name: string;
    variant_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  };
  relationships: {
    order: {
      links: Links;
    };
    product: {
      links: Links;
    };
    variant: {
      links: Links;
    };
  };
  links: {
    self: string;
  };
}

interface Links {
  related: string;
  self: string;
}
