export class Department {
  id: number;
  name: string;

  constructor(department: Department) {
    this.id = department.id;
    this.name = department.name;
  }
}

