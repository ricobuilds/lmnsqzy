import { LmnsqzyResponse } from '~/general/general.responses';
import { OrderItem } from './interface';

export interface GetOrderItemResponse extends LmnsqzyResponse<OrderItem> {}
export interface GetOrderItemsResponse extends LmnsqzyResponse<OrderItem[]> {}
