import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDTO} from "../model/dto/CategoryDTO";
import {Category} from "../model/equipment/Category";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  private readonly api_equipment = "http://localhost:8080/api/equipments";
  private readonly api_equipmentCategory = "http://localhost:8080/api/categories";

  getAllCategoryWithEquipment(): Observable<Array<CategoryDTO>> {
    return this.httpClient.get<Array<CategoryDTO>>(this.api_equipment);
  }

  searchByNameAndCategory(name: string, category: number): Observable<Array<CategoryDTO>> {
    // let params = new HttpParams().set("name", name).set("category", category);
    return this.httpClient.get<Array<CategoryDTO>>(this.api_equipment + "/search?category=" + category + "&name=" + name);
  }

  getAllCategory(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.api_equipmentCategory);
  }
}
