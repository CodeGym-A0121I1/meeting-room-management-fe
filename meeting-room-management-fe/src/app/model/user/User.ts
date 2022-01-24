import {Account} from "./Account";
import {Department} from "./Department";

export interface User {
  id: number,
  full_name: string;
  department: Department;
  account: Account;
}
