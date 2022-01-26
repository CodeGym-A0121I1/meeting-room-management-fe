import {Account} from "./Account";
import {Department} from "./Department";

export interface User {
  id: number,
  fullName: string;
  email: string;
  phone: string
  department: Department;
  account: Account;
}
