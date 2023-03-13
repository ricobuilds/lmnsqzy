export interface Order {
    "type": "orders",
    "id": "1",
    "attributes": {
        "store_id": number,
        "identifier": string,
        "order_number": number,
        "user_name": string,
        "user_email": string,
        "currency": string,
        "currency_rate": "1.0000",
        "subtotal": number,
        "discount_total": number,
        "tax": number,
        "total": number,
        "subtotal_usd": number,
        "discount_total_usd": number,
        "tax_usd": number,
        "total_usd": number,
        "tax_name": string,
        "tax_rate": string,
        "status": string,
        "status_formatted": string,
        "refunded": number,
        "refunded_at": null,
        "subtotal_formatted": string,
        "discount_total_formatted": string,
        "tax_formatted": string,
        "total_formatted": string,
        "first_order_item": {
            "id": number,
            "order_id": 1,
            "product_id": 1,
            "variant_id": 1,
            "product_name": "Test Limited Licencse for 2 years",
            "variant_name": "Default",
            "price": number,
            "created_at": string,
            "updated_at": string,
            "test_mode": boolean
        },
        "created_at": string,
        "updated_at": string
    },
    relationships: {
        store: {
            links: {
                related: string
                self: string
            }
        },
        'order-items': {
            links: {
                related: string
                self: string
            }
        },
        subscriptions: {
            links: {
                related: string
                self: string
            }
        },
        'license-keys': {
            links: {
                related: string
                self: string
            }
        }
    },
    links: {
        self: string
    }
}