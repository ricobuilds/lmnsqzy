import { ILmnsqzyResponse } from "~general/general.responses"
import { IGetUser } from "./interface"

export type GetUserResponse = Promise<ILmnsqzyResponse<IGetUser>>