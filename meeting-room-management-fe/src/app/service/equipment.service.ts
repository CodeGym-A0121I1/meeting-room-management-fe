import {Injectable} from '@angular/core';
import {IEquipment} from "../models/equipment/IEquipment";
import {ICategoryDto} from "../models/equipment/ICategoryDto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDTO} from "../model/dto/CategoryDTO";
import {Category} from "../model/equipment/Category";
import {AuthService} from "./auth.service";

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

  getAllCategoryWithEquipment(): Observable<Array<CategoryDTO>> {
    return this.httpClient.get<Array<CategoryDTO>>(this.API_EQUIPMENT);
  }

  searchByNameAndCategory(name: string, category: number): Observable<Array<CategoryDTO>> {
    // let params = new HttpParams().set("name", name).set("category", category);
    return this.httpClient.get<Array<CategoryDTO>>(this.API_EQUIPMENT + "/search?category=" + category + "&name=" + name);
  }

  getAllCategory(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.API_CATEGORY);
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
}
