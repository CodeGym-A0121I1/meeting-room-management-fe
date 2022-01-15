import {ICategory} from "./ICategory";
import {EStatus} from "../EStatus";

export interface IEquipment {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  status: EStatus;
  category: ICategory
}
