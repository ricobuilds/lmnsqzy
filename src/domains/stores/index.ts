import { LmnsqzyResponse } from '~general/general.responses';
import { Store } from './interface';

export interface GetStoreResponse extends LmnsqzyResponse<Store> {}
export interface GetStoresResponse extends LmnsqzyResponse<Store[]> {}
