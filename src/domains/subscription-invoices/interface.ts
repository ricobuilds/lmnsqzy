import { domains } from "~/general"

export interface SubscriptionInvoice {
    "type": domains,
    "id": string,
    "attributes": {
        "store_id": number,
        "subscription_id": number,
        "billing_reason": string,
        "card_brand": string,
        "card_last_four": string,
        "currency": string,
        "currency_rate": string,
        "subtotal": number,
        "discount_total": number,
        "tax": number,
        "total": number,
        "subtotal_usd": number,
        "discount_total_usd": number,
        "tax_usd": number,
        "total_usd": number,
        "status": string,
        "status_formatted": string,
        "refunded": number,
        "refunded_at": string | null,
        "subtotal_formatted": string,
        "discount_total_formatted": string,
        "tax_formatted": string,
        "total_formatted": string,
        "urls": {
            "invoice_url": string
        },
        "created_at": string,
        "updated_at": string,
        "test_mode": boolean
    },
    "relationships": {
        "store": Links,
        "subscription": Links
    },
    "links": {
        "self": string
    }
}

interface Links {
    links: {
        related: string
        self: string
    }
}