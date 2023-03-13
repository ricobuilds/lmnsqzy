import { domains } from '~/general';

export interface Product<
    ILink = {
        self: string;
    }
> {
    type: domains;
    id: string;
    attributes: {
        'store_id': string;
        name: string;
        slug: string;
        description: string;
        status: string;
        'status_formatted': string;
        'thumb_url': string;
        'large_thumb_url': string;
        price: number;
        'pay_what_you_want': boolean | number;
        'from_price': boolean | number;
        'to_price': boolean | number
        'buy_now_url': string
        'price_formatted': string
        'created_at': string
        'updated_at': string
    };
    relationships: IGetStoreRelationships;
    links: ILink;
}

interface IGetStoreRelationships<
    ILinks = {
        links: {
            related: string;
            self: string;
        };
    }
> {
    store: ILinks;
    variants: ILinks;
}
