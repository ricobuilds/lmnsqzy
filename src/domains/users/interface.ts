import { domains } from '../../general';

export interface User {
  type: domains;
  id: string;
  attributes: {
    name: string;
    email: string;
    color: string;
    avatar_url: string;
    has_custom_avatar: boolean;
    createdAt: string;
    updatedAt: string;
  };
  links: {
    self: string;
  };
}
