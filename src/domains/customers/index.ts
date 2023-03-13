import { LmnsqzyResponse, LmnsqzyError } from '~general/general.responses';
import { Customer } from './interface';

export type GetCustomerResponse = LmnsqzyResponse<Customer> | LmnsqzyError;
export type GetCustomersResponse =
  | LmnsqzyResponse<Customer[]>
  | LmnsqzyError;
