import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { Subscription } from "./interface";

export type UpdateSubscriptionResponse = LmnsqzyResponse<Subscription> | LmnsqzyError
export type GetSubscriptionResponse = LmnsqzyResponse<Subscription> | LmnsqzyError
export type GetSubscriptionsResponse = LmnsqzyResponse<Subscription[]> | LmnsqzyError
export type CancelSubscriptionResponse = LmnsqzyResponse<Subscription> | LmnsqzyError