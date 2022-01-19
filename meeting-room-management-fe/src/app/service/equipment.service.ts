import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEquipment} from "../models/equipment/IEquipment";
import {ICategoryDto} from "../models/equipment/ICategoryDto";
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
  URL_API_EQUIPMENT = "http://localhost:8080/api/equipments";
  URL_API_CATEGORY = "http://localhost:8080/api/categories"

  headers = new HttpHeaders({
    'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjYzMTExOSwiaWF0IjoxNjQyNTk1MTE5fQ.WMoRV1zi_zC4Ay3J9eRObXmySYldw2tggyfVbN6wlCwiZ1lpBeOHlJ0mOX5ohnjOFhevX8c3QwFLn_6T-By9VA"
  })


  constructor(private httpClient: HttpClient) {
  }

  getAllCategoryQuantityStatusDto(): Observable<ICategoryDto[]> {
    return this.httpClient.get<ICategoryDto[]>(this.URL_API_CATEGORY + "/quantity", {headers: this.headers});
  }

  getAllEquipmentByCategoryId(idCategory: number): Observable<IEquipment[]> {
    return this.httpClient.get<IEquipment[]>(this.URL_API_EQUIPMENT + "/categories/" + idCategory, {headers: this.headers});
  }

  deleteEquipment(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API_EQUIPMENT + '/' + id, {headers: this.headers})
  }

  getAllEquipmentByCategoryIdAndNameLike(idCategory: number, nameEquipmentSearch: string): Observable<IEquipment[]> {
    return this.httpClient.get<IEquipment[]>(this.URL_API_EQUIPMENT + '/' + idCategory + '/' + nameEquipmentSearch, {headers: this.headers});
  }

  updateStatusEquipment(id: string, status: string): Observable<void> {
    return this.httpClient.put<void>(this.URL_API_EQUIPMENT + '/' + id, status, {headers: this.headers});
  }
}
