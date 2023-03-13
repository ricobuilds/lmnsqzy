import { LmnsqzyError, LmnsqzyResponse } from '~general/general.responses';
import { User } from './interface';

export type GetUserResponse = LmnsqzyResponse<User> | LmnsqzyError
