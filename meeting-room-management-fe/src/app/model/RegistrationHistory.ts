import {Room} from "./Room";
import {User} from "./User";

export interface RegistrationHistory {
  id: string;
  dateStart: string;
  dateEnd: string;
  timeStart: string;
  timeEnd: string;
  description: string;
  isCancel: boolean;
  room: Room;
  user: User;
}
