import { domains } from "~/general";

export interface LicenseKey {
    "type": domains,
    "id": string,
    "attributes": {
        "store_id": number,
        "order_id": number,
        "order_item_id": number,
        "product_id": number,
        "user_name": string,
        "user_email": string,
        "key": string,
        "key_short": string,
        "activation_limit": number,
        "instances_count": number,
        "disabled": number,
        "status": string,
        "status_formatted": string,
        "expires_at": string | null,
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
    store: Links
    order: Links
    'order-item': Links
    product: Links
    'license-key-instances': Links
}
