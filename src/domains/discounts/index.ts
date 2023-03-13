import { LmnsqzyResponse } from '~/general/general.responses';
import { Discount } from './interface';

export interface CreateDiscountResponse extends LmnsqzyResponse<Discount> {};
export interface GetDiscountResponse extends LmnsqzyResponse<Discount> {};
export interface DeleteDiscountResponse extends LmnsqzyResponse<Discount> {};
export interface GetDiscountsResponse extends LmnsqzyResponse<Discount> {};

export interface DiscountOptions {
  name: string
  code: string
  amount: number
  'amount_type': string
  'store_id': string
}

