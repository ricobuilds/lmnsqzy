import { LmnsqzyResponse } from '~/general/general.responses';
import { File } from './interface';

export interface GetFileResponse extends LmnsqzyResponse<File> {};
export interface GetFilesResponse extends LmnsqzyResponse<File[]> {};
