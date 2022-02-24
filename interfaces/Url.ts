// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Url {
  id: string;
  real_url: string;
  slug: string;
  click: number;
  created_at: Date;
  updated_at: Date;
}
