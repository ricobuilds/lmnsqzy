import { LmnsqzyResponse } from '~/general/general.responses';
import { Checkout } from './interface';

export interface CreateCheckoutResponse extends LmnsqzyResponse<Checkout>  {};
export interface GetCheckoutResponse extends LmnsqzyResponse<Checkout>  {};
export interface GetCheckoutsResponse extends LmnsqzyResponse<Checkout[]> {}

export interface CheckoutOptions {
  name: string
  code: string
  amount: number
  'amount_type': string
  'store_id': string
}
