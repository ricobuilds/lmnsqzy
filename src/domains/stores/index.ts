import { ILmnsqzyMultiResponse } from "../../general/genereal.responses"
import { IGetStore } from "./interface"

export type GetStoresResponse = Promise<ILmnsqzyMultiResponse<IGetStore>>