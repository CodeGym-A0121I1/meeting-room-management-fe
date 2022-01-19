import {Status} from "../room/Status";
import {Category} from "./Category";

export interface Equipment {
  id: string,
  name: string,
  description: string,
  price: number,
  image: string,
  status: Status,
  category: Category;
}
