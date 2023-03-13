import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { SubscriptionInvoice } from "./interface";

export type GetSubscriptionInvoiceResponse = LmnsqzyResponse<SubscriptionInvoice> | LmnsqzyError;
export type GetSubscriptionInvoicesResponse = LmnsqzyResponse<SubscriptionInvoice[]> | LmnsqzyError