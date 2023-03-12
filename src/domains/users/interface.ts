import { domains } from '../../general';

export interface User {
  type: domains;
  id: string;
  attributes: {};
  links: {
    self: string;
  };
}
