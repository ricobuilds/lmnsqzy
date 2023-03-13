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
}
