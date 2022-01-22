import {Injectable} from '@angular/core';
import {IEquipment} from "../models/equipment/IEquipment";
import {ICategoryDto} from "../models/equipment/ICategoryDto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDTO} from "../model/dto/CategoryDTO";
import {Category} from "../model/equipment/Category";
import {AuthService} from "./auth.service";
import {Equipment} from "../model/equipment/Equipment";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  private readonly API_EQUIPMENT = "http://localhost:8080/api/equipments";
  private readonly API_CATEGORY = "http://localhost:8080/api/categories";
  private readonly JWT = this.authService.getToken() || "";

  headers = new HttpHeaders({
    'Authorization': this.JWT
  })

  getAllCategoryWithEquipment(roomID: string): Observable<Array<CategoryDTO>> {
    return this.httpClient.get<Array<CategoryDTO>>(this.API_EQUIPMENT + "?room=" + roomID, {headers: this.headers});
  }

  searchByNameAndCategory(name: string, category: number): Observable<Array<CategoryDTO>> {
    // let params = new HttpParams().set("name", name).set("category", category);
    return this.httpClient.get<Array<CategoryDTO>>(this.API_EQUIPMENT + "/search?category=" + category + "&name=" + name, {headers: this.headers});
  }

  getAllCategory(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.API_CATEGORY, {headers: this.headers});
  }

  getAllCategoryQuantityStatusDto(): Observable<ICategoryDto[]> {
    return this.httpClient.get<ICategoryDto[]>(this.API_CATEGORY + "/quantity", {headers: this.headers});
  }

  getAllEquipmentByCategoryId(idCategory: number): Observable<IEquipment[]> {
    return this.httpClient.get<IEquipment[]>(this.API_EQUIPMENT + "/categories/" + idCategory, {headers: this.headers});
  }

  deleteEquipment(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.API_EQUIPMENT + '/' + id, {headers: this.headers})
  }

  getAllEquipmentByCategoryIdAndNameLike(idCategory: number, nameEquipmentSearch: string): Observable<IEquipment[]> {
    return this.httpClient.get<IEquipment[]>(this.API_EQUIPMENT + '/' + idCategory + '/' + nameEquipmentSearch, {headers: this.headers});
  }

  updateStatusEquipment(id: string, status: string): Observable<void> {
    return this.httpClient.put<void>(this.API_EQUIPMENT + '/' + id, status, {headers: this.headers});
  }

  classifyEquipmentByCategory(equipmentList: Array<Equipment>): Array<CategoryDTO> {
    let categoryList: Array<CategoryDTO> = [];
    if (equipmentList?.length === 0) {
      return [];
    } else {
      for (const equipment of equipmentList) {
        let isExist: boolean = false;

        for (const categoryDTO of categoryList) {
          if (categoryDTO.id == equipment.category.id) {
            categoryDTO.equipmentList.push(equipment);
            isExist = true;
          }
        }

        if (!isExist) {
          let equipments: Array<Equipment> = [];
          equipments.push(equipment);
          categoryList.push({
            id: equipment.category.id,
            name: equipment.category.name,
            equipmentList: equipments
          })
        }
      }
    }
    return categoryList;
  }
}
