import {Department} from "./Department";

export interface User {
  id: string;
  fullName: string;
  department: Department;
}
