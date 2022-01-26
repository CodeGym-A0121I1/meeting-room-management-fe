import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Floor} from "../models/Floor";
import {Area} from "../models/Area";
import {RoomType} from "../models/RoomType";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) {}
  readonly URL_ROOM = "http://localhost:8080/api/rooms";
  private readonly api_floor = "http://localhost:8080/api/rooms/floors";
  private readonly api_area = "http://localhost:8080/api/rooms/areas";
  private readonly api_roomType = "http://localhost:8080/api/rooms/roomTypes";


  getAllRoom():Observable<any[]>{
    return this.http.get<any[]>(this.URL_ROOM);
  }
  getAllFloors(): Observable<Array<Floor>> {
    return this.http.get<Array<Floor>>(this.api_floor);
  }

  getAllAreas(): Observable<Array<Area>> {
    return this.http.get<Array<Area>>(this.api_area);
  }

  getAllRoomTypes(): Observable<Array<RoomType>> {
    return this.http.get<Array<RoomType>>(this.api_roomType);
  }
  deleteRoomById(id:string){
    return this.http.delete(this.URL_ROOM+'/'+id);
  }

  getRoomById(id: string) {
    return this.http.get(this.URL_ROOM+'/'+id);
  }
  searchRoom(name:string,floor:number,area:number,roomType:number,capacity:number,status:string){
    return this.http.get(this.URL_ROOM + '/searchRoom?name=' + name +
      '&floor=' + floor + '&area=' + area + '&roomType=' + roomType + '&capacity=' + capacity + '&status=' + status);
  }
}
