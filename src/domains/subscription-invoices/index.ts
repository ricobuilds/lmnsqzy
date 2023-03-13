import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { SubscriptionInvoice } from "./interface";

export type GetSubscriptionInvoice = LmnsqzyResponse<SubscriptionInvoice> | LmnsqzyError;
export type GetSubscriptionInvoices = LmnsqzyResponse<SubscriptionInvoice[]> | LmnsqzyError