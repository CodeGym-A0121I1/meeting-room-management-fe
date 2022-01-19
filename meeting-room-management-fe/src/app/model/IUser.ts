import {Account} from "./IAccount";
import {Department} from "./IDepartment";

export interface User {
  id: number,
  full_name: string;
  department_id: Department;
  account_username: Account;
}
