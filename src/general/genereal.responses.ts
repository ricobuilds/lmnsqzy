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

export interface IError {
    detail: string,
    status: string,
    title: string,
}
