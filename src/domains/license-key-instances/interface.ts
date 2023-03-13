import { domains } from "~/general";

export interface LicenseKeyInstance {
    "type": domains,
    "id": string,
    "attributes": {
        "license_key_id": number,
        "identifier": string,
        "name": string,
        "created_at": string,
        "updated_at": string
    },
}
