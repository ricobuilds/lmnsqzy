import { LmnsqzyResponse } from '~/general/general.responses';
import { DiscountRedemption } from './interface';

export interface GetDiscountRedemptionResponse extends LmnsqzyResponse<DiscountRedemption> {};
export interface GetDiscountRedemptionsResponse extends LmnsqzyResponse<DiscountRedemption[]> {};
