import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRoom} from "../models/IRoom";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) {}
  readonly URL_ROOM = "http://localhost:8080/api/rooms";

  getAllRoom():Observable<any[]>{
    return this.http.get<any[]>(this.URL_ROOM);
  }
  deleteRoomById(id:string){
    return this.http.delete(this.URL_ROOM+'/'+id);
  }

  getRoomById(id: string) {
    return this.http.get(this.URL_ROOM+'/'+id);
  }
}
