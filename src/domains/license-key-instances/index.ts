import { LmnsqzyResponse } from '~/general/general.responses';
import { LicenseKeyInstance } from './interface';

export interface GetLicenseKeyInstanceResponse
  extends LmnsqzyResponse<LicenseKeyInstance> {}
export interface GetLicenseKeyInstancesResponse
  extends LmnsqzyResponse<LicenseKeyInstance[]> {}
