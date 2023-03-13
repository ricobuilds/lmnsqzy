import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { LicenseKey } from "./interface";

export type GetLicenseKeyResponse = LmnsqzyResponse<LicenseKey> | LmnsqzyError
export type GetLicenseKeysResponse = LmnsqzyResponse<LicenseKey> | LmnsqzyError