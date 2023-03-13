export interface File {
  type: string;
  id: string;
  attributes: {
    variant_id: number;
    identifier: string;
    name: string;
    extension: string;
    download_url: string;
    size: string;
    size_formatted: string;
    version: string;
    sort: number;
    status: string;
    'createdAt': string;
    'updatedAt': string;
  };
  relationships: Relationships
  links: {
    self: string;
  };
}

interface Relationships<Links = {
  links: {
    related: string
    self: string
  }
}> {
  variants: Links
}