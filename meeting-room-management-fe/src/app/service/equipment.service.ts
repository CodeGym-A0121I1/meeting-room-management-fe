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

    headers = new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjA4OTIwMCwiaWF0IjoxNjQyMDUzMjAwfQ.4KgF64n8JBOly9E-PhoYGGG7YD3Eafx0uRZBiIcPncjg8LxYm4l-s70kCCAJzwxn0PBnl3mq11x1kNunn4UzwA"
    })


  constructor(private httpClient: HttpClient) {
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

  updateStatusEquipment(idEquipment: string, status: string): Observable<void>{
    return this.httpClient.put<void>(this.URL_API_EQUIPMENT + '/' + idEquipment, JSON.stringify(status), {headers: this.headers});
  }
}
