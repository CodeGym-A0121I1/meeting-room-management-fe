import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Floor} from "../model/room/Floor";
import {Area} from "../model/room/Area";
import {RoomType} from "../model/room/RoomType";
import {Room} from "../model/room/Room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  private readonly api_room = "http://localhost:8080/api/rooms";
  URL_ROOM="http://localhost:8080/api/rooms";
  getById(id:string):Observable<any>{
    return this.httpClient.get(this.URL_ROOM+'/'+id);
  }
  updateRoom(room:any):Observable<any>{
    return this.httpClient.put(this.URL_ROOM,room);}
  private readonly api_floor = "http://localhost:8080/api/rooms/floors";
  private readonly api_area = "http://localhost:8080/api/rooms/areas";
  private readonly api_roomType = "http://localhost:8080/api/rooms/roomTypes";
  private readonly api_image = "http://localhost:8080/api/rooms/image";

  getAllFloors(): Observable<Array<Floor>> {
    return this.httpClient.get<Array<Floor>>(this.api_floor);
  }

  getAllAreas(): Observable<Array<Area>> {
    return this.httpClient.get<Array<Area>>(this.api_area);
  }

  getAllRoomTypes(): Observable<Array<RoomType>> {
    return this.httpClient.get<Array<RoomType>>(this.api_roomType);
  }

  addRoom(room: Room) {
    return this.httpClient.post(this.api_room, room);
  }

  getImageName(): Observable<string> {
    // @ts-ignore
    return this.httpClient.get<string>(this.api_image, {responseType: 'text'});
  }
}
