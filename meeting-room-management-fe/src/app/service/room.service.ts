import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpClient:HttpClient) { }
  URL_ROOM="http://localhost:8080/api/rooms";
  URL_STATIC="http://localhost:8080/api/registration-histories";

messeage!:string;
  getRoomById(id:string):Observable<any>{

    return this.httpClient.get(this.URL_ROOM+'/'+id).pipe(
      catchError( (error)=> {
        if (error.status === 404)
          return throwError("không tìm thấy phòng với mã là " + id);
        return throwError("không tìm thấy phòng với mã là " + id);
      }));
  }
  getCountStaticByRoom(nameRoom:string){
    return this.httpClient.get(this.URL_STATIC+'/static-room-id?roomId='+nameRoom);
  }
}
