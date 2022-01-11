import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpClient:HttpClient) { }
  URL_ROOM="http://localhost:8080/api/rooms";

  getRoomById(id:string):Observable<any>{
    return this.httpClient.get(this.URL_ROOM+'/'+id);
  }

}
