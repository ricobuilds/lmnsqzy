import { ILmnsqzyMultiResponse } from '~general/general.responses';
import { IGetStore } from './interface';

export type GetStoresResponse = Promise<ILmnsqzyMultiResponse<IGetStore>>;
