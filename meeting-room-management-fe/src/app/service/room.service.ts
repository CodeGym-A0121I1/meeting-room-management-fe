import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Floor} from "../model/room/Floor";
import {Area} from "../model/room/Area";
import {RoomType} from "../model/room/RoomType";
import {Room} from "../model/room/Room";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  private readonly api_room = "http://localhost:8080/api/rooms";
  private readonly api_floor = "http://localhost:8080/api/rooms/floors";
  private readonly api_area = "http://localhost:8080/api/rooms/areas";
  private readonly api_roomType = "http://localhost:8080/api/rooms/roomTypes";
  private readonly api_image = "http://localhost:8080/api/rooms/image";
  private readonly JWT = this.authService.getToken() || "";

  headers = new HttpHeaders({
    'Authorization': this.JWT
  })

  getAllFloors(): Observable<Array<Floor>> {
    return this.httpClient.get<Array<Floor>>(this.api_floor, {headers: this.headers});
  }

  getAllAreas(): Observable<Array<Area>> {
    return this.httpClient.get<Array<Area>>(this.api_area, {headers: this.headers});
  }

  getAllRoomTypes(): Observable<Array<RoomType>> {
    return this.httpClient.get<Array<RoomType>>(this.api_roomType, {headers: this.headers});
  }

  addRoom(room: Room) {
    return this.httpClient.post(this.api_room, room, {headers: this.headers});
  }

  getImageName(): Observable<string> {
    // @ts-ignore
    return this.httpClient.get<string>(this.api_image, {responseType: 'text', headers: this.headers});
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get(this.api_room + '/' + id, {headers: this.headers});
  }

  updateRoom(room: any): Observable<any> {
    return this.httpClient.put(this.api_room, room, {headers: this.headers});
  }
}
