import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEquipment} from "../models/equipment/IEquipment";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  URL_API_EQUIPMENT = "http://localhost:8080/api/equipments";
  URL_API_CATEGORY = "http://localhost:8080/api/categories"
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MTk0MzMxNCwiaWF0IjoxNjQxOTA3MzE0fQ.R1TNHwFdI6b7zdLJ1EHsmFFSJIy5FEW96zlgO9AMg6ZjcJW3iCDVOY8-JpixFcw5fdMc3gqIryPr7Khri8nU2Q"
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAllEquipmentByCategoryId(idCategory: number): Observable<IEquipment[]> {
    return this.httpClient.get<IEquipment[]>(this.URL_API_EQUIPMENT + "/categories/" + idCategory, this.httpOptions);
  }

  deleteEquipment(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API_EQUIPMENT + '/' + id, this.httpOptions)
  }

  getAllEquipmentByCategoryIdAndNameLike(idCategory: number, nameEquipmentSearch: string): Observable<IEquipment[]> {
    return this.httpClient.get<IEquipment[]>(this.URL_API_EQUIPMENT + '/' + idCategory + '/' + nameEquipmentSearch, this.httpOptions);
  }

  updateStatusEquipment(idEquipment: string, status: any): Observable<void>{
    return this.httpClient.put<void>(this.URL_API_EQUIPMENT + '/' + idEquipment , status, this.httpOptions);
  }
}
