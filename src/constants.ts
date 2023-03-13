export const constants = {
  TOKEN_LIMIT: 861,
  LMNSQZY_BASE_URL: 'https://api.lemonsqueezy.com',
  LMNSQZY_HEADERS: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
};
export const errorsTable: {
  [key in number]: {
    detail: string;
    status: string;
    title: string;
  };
} = {
  204: {
    status: '204',
    title: 'No Content',
    detail: 'Removal of discount was successful.'
  },
  400: {
    status: '400',
    title: 'Bad Request',
    detail:
      "The server cannot process your request because it's malformed. Check your syntax and try again.",
  },
  401: {
    status: '401',
    title: 'Unauthorized',
    detail:
      'You are not authorised to access this resource, Please log in with valid credentials.',
  },
  403: {
    status: '403',
    title: 'Forbidden',
    detail:
      'You do not have permission to access this resource. Please content admin for further assistance.',
  },
  404: {
    status: '404',
    title: 'Not Found',
    detail:
      'The resource you requested cannot be found. Please check the link/url and try again.',
  },
  405: {
    status: '405',
    title: 'Method Not Allowed',
    detail:
      'The method used for is not compatible with with the requested resource. Check the codebase and documentation to resolve this.',
  },
  422: {
    status: '422',
    title: 'Unprocessable Entity',
    detail:
      'Your request has missing required fields or invalid data. Check your input and try again. If it persists, please contact admin for further assistance.',
  },
  429: {
    status: '429',
    title: 'Too Many Requests',
    detail:
      'Multiple requests have been made to the backend! Please try again in a minute.',
  },
};
