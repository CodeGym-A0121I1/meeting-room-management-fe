import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDTO} from "../model/dto/CategoryDTO";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  private readonly api_equipment = "http://localhost:8080/api/equipments";

  getAllCategoryWithEquipment(): Observable<Array<CategoryDTO>> {
    return this.httpClient.get<Array<CategoryDTO>>(this.api_equipment);
  }
}
