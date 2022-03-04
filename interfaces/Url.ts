// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
export interface Url {
  readonly id?: string
  readonly real_url?: string
  readonly slug?: string
  readonly clicks?: number
  readonly created_at?: Date
  readonly updated_at?: Date
}
