import {AccountDTO} from "./AccountDTO";
import {Department} from "../IDepartment";

export interface UserDTO {
  id: string;
  fullName: string;
  account: AccountDTO;
  department: Department;
}
