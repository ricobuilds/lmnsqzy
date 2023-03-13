import { LmnsqzyError, LmnsqzyResponse } from "~/general/general.responses";
import { OrderItem } from "./interface";


export type GetOrderItemResponse = LmnsqzyResponse<OrderItem> | LmnsqzyError;
export type GetOrderItemsResponse = LmnsqzyResponse<OrderItem[]> | LmnsqzyError