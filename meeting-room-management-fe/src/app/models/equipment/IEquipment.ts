import {ICategory} from "./ICategory";

export interface IEquipment {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  status: any;
  category: ICategory
}
