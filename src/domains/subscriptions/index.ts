import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { Subscription } from "./interface";

export type UpdateSubscription = LmnsqzyResponse<Subscription> | LmnsqzyError
export type GetSubscription = LmnsqzyResponse<Subscription> | LmnsqzyError
export type GetSubscriptions = LmnsqzyResponse<Subscription[]> | LmnsqzyError
export type CancelSubscription = LmnsqzyResponse<Subscription> | LmnsqzyError