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
  private readonly api_floor = "http://localhost:8080/api/rooms/floors";
  private readonly api_area = "http://localhost:8080/api/rooms/areas";
  private readonly api_roomType = "http://localhost:8080/api/rooms/roomTypes";

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

}
