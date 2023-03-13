export interface LmnsqzyResponse<
  R,
  L = {
    self: string;
  }
> {
  jsonapi: {
    version: string;
  };
  links?: L;
  data?: R | R[];
  meta?: {
    page: {
      currentPage: number;
      from: number;
      lastPage: number;
      perPage: number;
      to: number;
      total: number;
    };
  };
  errors?: ApiError;
}

export interface LmnsqzyError {
  jsonapi: {
    version: string;
  };
  errors: ApiError;
}

interface ApiError {
  detail: string;
  status: string;
  title: string;
}
