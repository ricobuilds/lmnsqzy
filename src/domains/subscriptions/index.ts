import { LmnsqzyResponse } from '~/general/general.responses';
import { Subscription } from './interface';

export interface UpdateSubscriptionResponse extends LmnsqzyResponse<Subscription> {};
export interface GetSubscriptionResponse extends LmnsqzyResponse<Subscription> {};
export interface GetSubscriptionsResponse extends LmnsqzyResponse<Subscription[]> {};
export interface CancelSubscriptionResponse extends LmnsqzyResponse<Subscription> {};
