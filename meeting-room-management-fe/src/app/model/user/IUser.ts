import {AccountDTO} from "../DTO/AccountDTO";
import {DepartmentDTO} from "../DTO/DepartmentDTO";

export interface User {
  id: number,
  full_name: string;
  department: DepartmentDTO;
  account: AccountDTO;
}
