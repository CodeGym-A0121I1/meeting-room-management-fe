import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategoryDto} from "../models/ICategoryDto";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  URL_API_EQUIPMENT = "http://localhost:8080/api/equipments";
  URL_API_CATEGORY = "http://localhost:8080/api/categories"

  constructor(private httpClient: HttpClient) {
  }

  getAllCategoryQuantityStatusDto(): Observable<ICategoryDto[]> {
    return this.httpClient.get<ICategoryDto[]>(this.URL_API_CATEGORY + "/quantity");
  }
}
