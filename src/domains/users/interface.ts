import { domains } from "../../general"

export interface IGetUser {
    type: domains
    id: string
    attributes: {}
    links: {
        self: string
    }
}