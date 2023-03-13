import { LmnsqzyResponse } from '~/general/general.responses';
import { Order } from './interface';

export interface GetOrderResponse extends LmnsqzyResponse<Order> {};
export interface GetOrdersResponse extends LmnsqzyResponse<Order[]> {};
