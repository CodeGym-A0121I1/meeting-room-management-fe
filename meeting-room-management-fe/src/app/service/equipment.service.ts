import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../models/equipment/ICategory";
import {IEquipment} from "../models/equipment/IEquipment";

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

  getAllCategories(): Observable<Array<ICategory>> {
    return this.httpClient.get<Array<ICategory>>(this.URL_API_CATEGORY);
  }

  createEquipment(equipment:IEquipment){
    return this.httpClient.post(this.URL_API_EQUIPMENT, equipment)
  }

}
