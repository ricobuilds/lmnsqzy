import { LmnsqzyError, LmnsqzyResponse } from '~/general/general.responses';
import { Variant } from './interface';

export type GetVariantResponse = LmnsqzyResponse<Variant> | LmnsqzyError;
export type GetVariantsResponse = LmnsqzyResponse<Variant[]> | LmnsqzyError;
