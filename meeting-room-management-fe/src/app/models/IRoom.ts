import {IArea} from "./IArea";
import {IFloor} from "./IFloor";
import {IRoomType} from "./IRoomType";

export interface IRoom {
  id:string;
  name:string;
  status:any;
  image:string;
  capacity:number;
  area:IArea;
  floor:IFloor;
  roomType:IRoomType;
}
