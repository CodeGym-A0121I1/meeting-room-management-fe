import {Status} from "../room/Status";

export interface Equipment {
  id: string,
  name: string,
  description: string,
  price: number,
  image: string,
  status: Status,
  category_id: number;
}
