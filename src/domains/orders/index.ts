import { LmnsqzyError, LmnsqzyResponse } from '~/general/general.responses';
import { Order } from './interface';

export type GetOrderResponse = LmnsqzyResponse<Order> | LmnsqzyError;
export type GetOrdersResponse = LmnsqzyResponse<Order[]> | LmnsqzyError;
