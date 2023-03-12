import { LmnsqzyError, LmnsqzyResponse } from '~general/general.responses';
import { Store } from './interface';

export type GetStoreResponse = LmnsqzyResponse<Store> | LmnsqzyError;
export type GetStoresResponse = LmnsqzyResponse<Store[]> | LmnsqzyError;
