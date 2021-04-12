import { Thumbnail } from './Thumbnail';
import { Author } from './Author';

export interface Ad {
  id?: number | any,
  dateCreated?: string,
  price: number,
  lastUpdated?: string,
  b_des: string,
  s_des: string,
  name: string,
  status?: Boolean,
  author?: Author
  thumbnails?: [Thumbnail]
}

