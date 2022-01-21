export class DepartmentDTO {
  id: number;
  name: string;

  constructor(department: DepartmentDTO) {
    this.id = department.id;
    this.name = department.name;
  }
}

