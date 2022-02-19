// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Link = {
  id: number;
  name: string;
  created_at: string;
  url: string;
  user: string;
  clicks: number;
};
