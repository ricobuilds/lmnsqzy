import { LmnsqzyResponse } from '~general/general.responses';
import { Customer } from './interface';

export interface GetCustomerResponse extends LmnsqzyResponse<Customer> {}
export interface GetCustomersResponse extends LmnsqzyResponse<Customer[]> {}
