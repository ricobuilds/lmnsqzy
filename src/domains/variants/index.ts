import { LmnsqzyResponse } from '~/general/general.responses';
import { Variant } from './interface';

export interface GetVariantResponse extends LmnsqzyResponse<Variant> {}
export interface GetVariantsResponse extends LmnsqzyResponse<Variant[]> {}
