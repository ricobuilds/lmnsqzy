import { domains } from "~/general"

export interface DiscountRedemption {
    "type": domains,
    "id": string,
    "attributes": {
        "discount_id": number,
        "order_id": number,
        "discount_name": string,
        "discount_code": string,
        "discount_amount": number,
        "discount_amount_type": string,
        "amount": number,
        "created_at": string,
        "updated_at": string
    },
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
    discount: Links
    order: Links
}
