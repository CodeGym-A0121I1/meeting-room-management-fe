import {ICategory} from "./ICategory";

export interface IEquipment {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    status: string;
    category: ICategory
}
