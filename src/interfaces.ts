import { domains } from "./general"


export interface ILmnsqzyResponse<IData, ILinks = {
    self: string
}> {
    jsonapi: {
        version: string
    },
    links: ILinks,
    data: IData,
    errors?: IError
}

export interface IError {
    detail: string,
    status: string,
    title: string,
}

export interface ILmnsqzyMultiResponse<IData, ILinks = {
    first: string,
    last: string
}> extends ILmnsqzyResponse<IData, ILinks> {
    meta: {
        page: {
            "currentPage": number
            "from": number
            "lastPage": number
            "perPage": number
            "to": number
            "total": number
        }
    },
}

export interface IGetUser {
    type: domains
    id: string
    attributes: {}
    links: {
        self: string
    }
}

export interface IGetStore<ILink = {
    self: string
}> {
    type: domains
    id: string
    attributes: {
        name: string
        slug: string
        domain: string
        url: string
        avatar_url: string
        plan: string
        country: string
        country_nicename: string
        currency: string
        total_sales: number
        total_revenue: number
    },
    relationships: IGetStoreRelationships,
    links: ILink
}

interface IGetStoreRelationships {
    products: Links
    orders: Links
    subscriptions: Links
    discounts: Links
    'license-keys': Links
}

interface Links {
    links: {
        related: string;
        self: string;
    }
}