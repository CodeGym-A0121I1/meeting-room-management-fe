import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEquipment} from "../models/equipment/IEquipment";
import {ICategoryDto} from "../models/equipment/ICategoryDto";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

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
