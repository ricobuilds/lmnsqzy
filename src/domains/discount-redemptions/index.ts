import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { DiscountRedemption } from "./interface";

export type GetDiscountRedemptionResponse = LmnsqzyResponse<DiscountRedemption> | LmnsqzyError
export type GetDiscountRedemptionsResponse = LmnsqzyResponse<DiscountRedemption[]> | LmnsqzyError