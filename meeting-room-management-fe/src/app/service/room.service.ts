import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpClient:HttpClient) { }
  URL_ROOM="http://localhost:8080/api/rooms";
  getById(id:string):Observable<any>{
    return this.httpClient.get(this.URL_ROOM+'/'+id);
  }
  updateRoom(id:string,room:any):Observable<any>{
    return this.httpClient.put(this.URL_ROOM+'/update/'+id,room);
  }
getAllAreas(){
  return this.httpClient.get<any[]>(this.URL_ROOM+'/areas');
}
  getAllFloors(){
    return this.httpClient.get<any[]>(this.URL_ROOM+'/floors');
  }
  getAllTypes(){
    return this.httpClient.get<any[]>(this.URL_ROOM+'/roomTypes');
  }
}
