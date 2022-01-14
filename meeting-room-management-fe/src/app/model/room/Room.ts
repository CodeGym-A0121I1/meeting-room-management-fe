import {Status} from "./Status";
import {Area} from "./Area";
import {Floor} from "./Floor";
import {RoomType} from "./RoomType";
import {Equipment} from "../equipment/Equipment";

export interface Room {
  id: string,
  name: string,
  status: Status,
  image: string,
  capacity: number,
  area: Area,
  floor: Floor,
  roomType: RoomType
  equipmentList: Array<Equipment>
}
