import { LmnsqzyResponse } from '~/general/general.responses';
import { Product } from './interface';

export interface GetProductRespense extends LmnsqzyResponse<Product> {};
export interface GetProductsResponse extends LmnsqzyResponse<Product[]> {};
