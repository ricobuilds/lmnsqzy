import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { LicenseKeyInstance } from "./interface";

export type GetLicenseKeyInstanceResponse = LmnsqzyResponse<LicenseKeyInstance> | LmnsqzyError
export type GetLicenseKeyInstancesResponse = LmnsqzyResponse<LicenseKeyInstance[]> | LmnsqzyError