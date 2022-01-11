import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategoryDto} from "../models/ICategoryDto";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  URL_API_EQUIPMENT = "http://localhost:8080/api/equipments";
  URL_API_CATEGORY = "http://localhost:8080/api/categories"
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MTkyMjA0NCwiaWF0IjoxNjQxODg2MDQ0fQ.z3QjWQZ66RvrBKAHDvWB4_O1U4wqQGqgZc5DbDrpFjaxDYRanBcglBo29Yi62QUMA1c3TXB0INTJowRunBBMNA"
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAllCategoryQuantityStatusDto(): Observable<ICategoryDto[]> {
    return this.httpClient.get<ICategoryDto[]>(this.URL_API_CATEGORY + "/quantity", this.httpOptions);
  }
}
