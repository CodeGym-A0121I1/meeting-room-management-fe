import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationHistory} from "../model/RegistrationHistory";
import {Observable} from "rxjs";
import {Room} from "../model/Room";
import {RoomType} from "../model/RoomType";
import {Area} from "../model/Area";
import {ICategory} from "../model/ICategory";

@Injectable({
    providedIn: 'root'
})
export class RegistrationHistoryService {

  readonly URL_API_HISTORY = "http://localhost:8080/api/registration-histories/signupRoom";
  readonly ROOM_API_URL = "http://localhost:8080/api/rooms";
  readonly ROOMTYPE_API_URL = "http://localhost:8080/api/rooms/roomTypes";
  readonly AREAS_API_URL = "http://localhost:8080/api/rooms/areas";
  readonly CATEGORY_API_URL = "http://localhost:8080/api/categories";
  readonly URL_STATISTIC_BY_ROOM = "http://localhost:8080/api/registration-histories/static-by-room";
  readonly URL_STATISTIC_PERFORMANCE = "http://localhost:8080/api/registration-histories/static-room-performance";
  readonly URL_STATISTIC_TOTAL_USE = "http://localhost:8080/api/registration-histories/static-room-total";
  readonly URL_STATISTIC_BY_TIME = "http://localhost:8080/api/registration-histories";


  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(this.URL_API_HISTORY);
  }

  SignupHistory(history: RegistrationHistory): Observable<RegistrationHistory> {
    return this.httpClient.post<RegistrationHistory>(this.URL_API_HISTORY, history);
  }

  getAllRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.ROOM_API_URL);
  }

  //show all các loại  phòng
  getAllRoomType(): Observable<RoomType[]> {
    return this.httpClient.get<RoomType[]>(this.ROOMTYPE_API_URL);
  }

  //Show all khu vục phòng hợp

  getAllAreas(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(this.AREAS_API_URL);
  }

  //show all các loại thiết bị
  getAllCategry(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.CATEGORY_API_URL);
  }

  //thong ke theo thoi gian
  getStatisticByTime(startdate: Date, endDate: Date): Observable<RegistrationHistory[]> {
    return this.httpClient.put<RegistrationHistory[]>(this.URL_STATISTIC_BY_TIME, {startdate, endDate});
  }

  //thong ke theo phong
  getStatisticByRoom(roomType: String, roomName: String, month: String, year: String): Observable<RegistrationHistory[]> {
    return this.httpClient.get<RegistrationHistory[]>(this.URL_STATISTIC_BY_ROOM + "?roomType=" + roomType + "&roomName=" + roomName + "&month=" + month + "&year=" + year);
  }

  //hieu suat
  getStatisticPerformance(roomType: String, roomName: String, month: String, year: String): Observable<number> {
    return this.httpClient.get<number>(this.URL_STATISTIC_PERFORMANCE + "?roomType=" + roomType + "&roomName=" + roomName + "&month=" + month + "&year=" + year);
  }

  //tong so lan su dung
  getStatisticTotalUser(roomType: String, roomName: String, month: String, year: String): Observable<number> {
    return this.httpClient.get<number>(this.URL_STATISTIC_TOTAL_USE + "?roomType=" + roomType + "&roomName=" + roomName + "&month=" + month + "&year=" + year);
  }
}
