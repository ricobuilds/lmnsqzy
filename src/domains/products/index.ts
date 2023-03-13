import { LmnsqzyError, LmnsqzyResponse } from '~/general/general.responses';
import { Product } from './interface';

export type GetProductRespense = LmnsqzyResponse<Product> | LmnsqzyError;
export type GetProductsResponse = LmnsqzyResponse<Product[]> | LmnsqzyError