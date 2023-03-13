import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { Checkout } from "./interface";

export type CreateCheckoutResponse = LmnsqzyResponse<Checkout> | LmnsqzyError
export type GetCheckoutResponse = LmnsqzyResponse<Checkout> | LmnsqzyError
export type GetCheckoutsResponse = LmnsqzyResponse<Checkout[]> | LmnsqzyError