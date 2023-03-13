import { LmnsqzyResponse, LmnsqzyError } from "~/general/general.responses"
import { File } from "./interface"

export type GetFileResponse = LmnsqzyResponse<File> | LmnsqzyError
export type GetFilesResponse = LmnsqzyResponse<File[]> | LmnsqzyError