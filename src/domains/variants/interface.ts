type interval = 'day' | 'week' | 'month' | 'year'
type license_length_value = 'one' | 'week' | 'month' | 'year'
type status = 'pending' | 'draft' | 'published'

export interface Variant {
    type: string
    id: string
    attributes: {
        "product_id": string
        "name": string
        slug: string
        description: string
        price: number
        "is_subscription": boolean
        interval: interval | null
        "interval_count": number | null
        "has_free_trial": boolean
        "trial_interval": interval
        "trial_interval_count": number | null
        "pay_what_you_want": boolean
        "min_price": number
        "suggested_price": number
        "has_license_keys": boolean
        "license_activation_limit": number,
        "is_license_limit_unlimited": boolean,
        "license_length_value": license_length_value,
        "license_length_unit": "years",
        "is_license_length_unlimited": boolean,
        "sort": number,
        "status": status,
        "status_formatted": string,
        "created_at": string,
        "updated_at": string
    }
    relationships: {
        product: {
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