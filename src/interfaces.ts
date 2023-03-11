// desired output for each handler

export interface ILmnsqzyResponse<IData> {
    jsonapi: {
        version: string
    },
    links: {
        self: string
    },
    data: IData,
    errors?: IError
}

export interface IError {
    jsonapi: {
        version: string
    },
    errors: [
        {
            detail: string,
            status: string | number,
            title: string,
        }
    ]
}

export interface ILmnsqzyMultiResponse<IData> extends ILmnsqzyResponse<IData> {
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
    type: 'users'
    | 'stores'
    | 'customers'
    | 'products'
    | 'variants'
    | 'files'
    | 'orders'
    | 'order-items'
    | 'subscriptions'
    | 'subscription-invoices'
    | 'discounts'
    | 'discount-redemptions'
    | 'license-keys'
    | 'license-key-instances'
    | 'checkouts';
    id: string
    attributes: {}
    links: {
        self: string
    }
}