import {Account} from "../user/Account";
import {Department} from "../user/Department";

export class UserDTO {
  fullName: string;
  account: Account;
  department: Department;
  email: string;
  phone: string;
}
