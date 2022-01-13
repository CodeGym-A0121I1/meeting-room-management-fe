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
    'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjEyMDQwOSwiaWF0IjoxNjQyMDg0NDA5fQ.NrFx4pcI8fcOWJj4hUjjR4LS5kLZkO7OxvPwfFtH52CernY7FjpYjIJ59K8XIZM_vjR8OQt3kybQRwed2jKIpQ"
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

  updateStatusEquipment(equipemnt: IEquipment): Observable<void> {
    return this.httpClient.put<void>(this.URL_API_EQUIPMENT + '/' + equipemnt.id, equipemnt, {headers: this.headers});
  }
}
