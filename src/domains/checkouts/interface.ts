export interface Checkout {
    type: string
    id: string
    attributes: {
        'store_id': number
        'variant_id': number
        'custom_price': number | null
        'product_options': {
            'name': string
            description: string
            media: string[]
            'redirect_url': string
            "receipt_button_text": string,
            "receipt_link_url": string,
            "receipt_thank_you_note": string,
            "enabled_variants": number[]
        },
        'checkout_options': {
            "embed": boolean,
            "media": boolean,
            "logo": boolean,
            "desc": boolean,
            "discount": boolean,
            "dark": boolean,
            "subscription_preview": boolean,
            "button_color": string
        },
        'checkout_data': {
            "email": string,
            "name": string,
            "billing_address": {
                "country": string,
                "zip": string
            },
            "tax_number": string,
            "discount_code": string,
            "custom": []
        },
        'preview': {
            "currency": string,
            "currency_rate": number,
            "subtotal": number,
            "discount_total": number,
            "tax": number,
            "total": number,
            "subtotal_usd": number,
            "discount_total_usd": number,
            "tax_usd": number,
            "total_usd": number,
            "subtotal_formatted": string,
            "discount_total_formatted": string,
            "tax_formatted": string,
            "total_formatted": string
        },
        "expires_at": string | null,
        "created_at": string,
        "updated_at": string,
        "test_mode": boolean,
        "url": string | null
    }
}
