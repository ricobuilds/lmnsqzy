import { domains } from "~/general"

export interface OrderItem {
    "type": domains,
    "id": string
    "attributes": {
        "order_id": number,
        "product_id": number,
        "variant_id": number,
        "product_name": string,
        "variant_name": string,
        "price": number,
        "created_at": string,
        "updated_at": string
    }
    relationships: Relationships
    links: {
        self: string
    }
}

interface Relationships<Links = {
    links: {
      related: string
      self: string
    }
  }> {
    order: Links
    product: Links
    variant: Links
  }
  