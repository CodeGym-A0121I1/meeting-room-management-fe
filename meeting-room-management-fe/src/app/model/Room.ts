import {EStatus} from "./EStatus";
import {Area} from "./Area";
import {Floor} from "./Floor";
import {RoomType} from "./RoomType";
import {IEquipment} from "./IEquipment";

export interface Room {
    id: string;
    name: string;
    status: string;
    image: string;
    capacity: number;
    area: Area;
    floor: Floor;
    roomType: RoomType;
    equipmentList : Array<IEquipment>
}
