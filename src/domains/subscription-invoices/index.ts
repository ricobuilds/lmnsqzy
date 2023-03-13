import { LmnsqzyResponse } from '~/general/general.responses';
import { SubscriptionInvoice } from './interface';

export interface GetSubscriptionInvoiceResponse
  extends LmnsqzyResponse<SubscriptionInvoice> {}
export interface GetSubscriptionInvoicesResponse
  extends LmnsqzyResponse<SubscriptionInvoice[]> {}
