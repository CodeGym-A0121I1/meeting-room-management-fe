import {Equipment} from "../equipment/Equipment";

export interface CategoryDTO {
  id: number,
  name: string
  equipmentList: Array<Equipment>
}
