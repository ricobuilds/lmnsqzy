import { LmnsqzyError, LmnsqzyResponse } from '~/general/general.responses';
import { Discount } from './interface';

export type CreateDiscountResponse = LmnsqzyResponse<Discount> | LmnsqzyError;
export type GetDiscountResponse = LmnsqzyResponse<Discount> | LmnsqzyError;
export type DeleteDiscountResponse = LmnsqzyResponse<Discount> | LmnsqzyError;
export type GetDiscountsResponse = LmnsqzyResponse<Discount> | LmnsqzyError;

export interface DiscountOptions {
  name: string
  code: string
  amount: number
  'amount_type': string
  'store_id': string
}

