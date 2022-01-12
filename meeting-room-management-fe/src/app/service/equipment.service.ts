import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategoryDto} from "../models/equipment/ICategoryDto";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  URL_API_EQUIPMENT = "http://localhost:8080/api/equipments";
  URL_API_CATEGORY = "http://localhost:8080/api/categories"
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjAzNjUwMywiaWF0IjoxNjQyMDAwNTAzfQ.yQsWCY5C5bwmujsjq8QyXEiZL3gaeYLCrdyj1E69JRqo6Vd1bZANESpqEPaQ_X7Y5dUNWgPA5Un1ASB_9XsK1A"
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAllCategoryQuantityStatusDto(): Observable<ICategoryDto[]> {
    return this.httpClient.get<ICategoryDto[]>(this.URL_API_CATEGORY + "/quantity", this.httpOptions);
  }
}
