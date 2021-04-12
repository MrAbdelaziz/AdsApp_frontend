import { Ad } from './Ad';
export interface Thumbnail {
  id?: number | any
  uri: string
  ad?: Ad,
  dateCreated?: string
  lastUpdated?: string
}