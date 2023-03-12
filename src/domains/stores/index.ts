import { ILmnsqzyResponse, ILmnsqzyMultiResponse } from '~general/general.responses';
import { IGetStore } from './interface';

export type GetStoreResponse = Promise<ILmnsqzyResponse<IGetStore>>;
export type GetStoresResponse = Promise<ILmnsqzyMultiResponse<IGetStore>>;
