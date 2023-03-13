import { LmnsqzyError, LmnsqzyResponse } from '~/general/general.responses';
import { Checkout } from './interface';

export type CreateCheckoutResponse = LmnsqzyResponse<Checkout> | LmnsqzyError;
export type GetCheckoutResponse = LmnsqzyResponse<Checkout> | LmnsqzyError;
export type GetCheckoutsResponse = LmnsqzyResponse<Checkout[]> | LmnsqzyError;

export interface CheckoutOptions {
  name: string
  code: string
  amount: number
  'amount_type': string
  'store_id': string
}
