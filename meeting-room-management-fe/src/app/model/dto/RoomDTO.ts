import {Status} from "../room/Status";
import {Area} from "../room/Area";
import {Floor} from "../room/Floor";
import {RoomType} from "../room/RoomType";
import {Equipment} from "../equipment/Equipment";

export interface RoomDTO {
  id: string,
  name: string,
  status: Status,
  image: string,
  capacity: number,
  area: Area,
  floor: Floor,
  roomType: RoomType,
  equipmentList: Array<Equipment>
}
