import {AccountDTO} from "./AccountDTO";
import {DepartmentDTO} from "./DepartmentDTO";

export class UserDTO {
  fullName: string;
  account: AccountDTO;
  department: DepartmentDTO;
}
