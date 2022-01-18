import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private httpClient:HttpClient) { }
  URL_EQUIPMENT="http://localhost:8080/api/equipments";

  getEquipmentById(id:string):Observable<any>{
    return this.httpClient.get(this.URL_EQUIPMENT+'/'+id).pipe(
      catchError((err) => {
        if (err.status === 404)
          return throwError("Không tìm thấy tài sản với mã: "+id);
        return throwError("Không tìm thấy tài sản với mã: "+id);
      }));
  }
}
