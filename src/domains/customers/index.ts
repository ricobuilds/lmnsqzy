import { LmnsqzyResponse, LmnsqzyError } from '~general/general.responses';
import { IGetCustomer } from './interface';

export type GetCustomerResponse = LmnsqzyResponse<IGetCustomer> | LmnsqzyError;
export type GetCustomersResponse =
  | LmnsqzyResponse<IGetCustomer[]>
  | LmnsqzyError;
