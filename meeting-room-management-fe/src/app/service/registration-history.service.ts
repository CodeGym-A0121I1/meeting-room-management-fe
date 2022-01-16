import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationHistory} from "../model/RegistrationHistory";
import {Observable} from "rxjs";
import {Room} from "../model/Room";
import {RoomType} from "../model/RoomType";

@Injectable({
  providedIn: 'root'
})
export class RegistrationHistoryService {
  URL_API_HISTORY = "http://localhost:8080/api/registration-histories"
  ROOM_API_URL = "http://localhost:8080/api/rooms"
  ROOMTYPE_API_URL ="http://localhost:8080/api/rooms/roomTypes"

  constructor(private httpClient: HttpClient) {
  }

  SignupHistory(history: RegistrationHistory): Observable<RegistrationHistory> {
    return this.httpClient.post<RegistrationHistory>(this.URL_API_HISTORY, history);
  }

  getAllRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.ROOM_API_URL);
  }
  getAllRoomType(): Observable<RoomType[]> {
    return this.httpClient.get<RoomType[]>(this.ROOMTYPE_API_URL);
  }


}
