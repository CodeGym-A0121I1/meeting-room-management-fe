import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegistrationHistory} from "../model/registration-history/RegistrationHistory";
import {Room} from "../model/room/Room";
import {Area} from "../model/room/Area";
import {Category} from "../model/equipment/Category";
import {RoomType} from "../model/room/RoomType";
import {AuthService} from "./auth.service";
import {Observable, throwError} from "rxjs";
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationHistoryService {

  readonly URL_API_HISTORY = "http://localhost:8080/api/registration-histories/signupRoom";
  readonly ROOM_API_URL = "http://localhost:8080/api/rooms";
  readonly ROOMTYPE_API_URL = "http://localhost:8080/api/rooms/roomTypes";
  readonly AREAS_API_URL = "http://localhost:8080/api/rooms/areas";
  readonly CATEGORY_API_URL = "http://localhost:8080/api/categories";
  readonly URL_API_HISTORY_ALL = "http://localhost:8080/api/registration-histories";
  readonly URL_STATISTIC_BY_ROOM = "http://localhost:8080/api/registration-histories/static-by-room";
  readonly URL_HISTORY_BY_ROOM_ID = "http://localhost:8080/api/registration-histories/history-room-id";
  readonly URL_STATISTIC_PERFORMANCE = "http://localhost:8080/api/registration-histories/static-room-performance";
  readonly URL_STATISTIC_TOTAL_USE = "http://localhost:8080/api/registration-histories/static-room-total";
  readonly URL_STATISTIC_BY_TIME = "http://localhost:8080/api/registration-histories";


  private readonly jwt = this.authService.getToken() || '';

  headers = new HttpHeaders({
    'Authorization': this.jwt
  });


  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getAll() {
    return this.httpClient.get(this.URL_API_HISTORY_ALL, {headers: this.headers});
  }

  signupHistory(history: RegistrationHistory): Observable<RegistrationHistory> {
    return this.httpClient.post<RegistrationHistory>(this.URL_API_HISTORY, history, {headers: this.headers});
  }

  getAllRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.ROOM_API_URL, {headers: this.headers});
  }

  //show all các loại  phòng
  getAllRoomType(): Observable<RoomType[]> {
    return this.httpClient.get<RoomType[]>(this.ROOMTYPE_API_URL, {headers: this.headers});
  }

  //Show all khu vục phòng hợp

  getAllAreas(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(this.AREAS_API_URL, {headers: this.headers});
  }

  //show all các loại thiết bị
  getAllCategry(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.CATEGORY_API_URL, {headers: this.headers});
  }

  //thong ke theo thoi gian
  getStatisticByTime(startdate: Date, endDate: Date): Observable<RegistrationHistory[]> {
    return this.httpClient.put<RegistrationHistory[]>(this.URL_STATISTIC_BY_TIME, {
      startdate,
      endDate
    }, {headers: this.headers});
  }

  //thong ke theo phong
  getStatisticByRoom(roomType: String, roomName: String, month: String, year: String): Observable<RegistrationHistory[]> {
    return this.httpClient.get<RegistrationHistory[]>(this.URL_STATISTIC_BY_ROOM + "?roomType=" + roomType + "&roomName=" + roomName + "&month=" + month + "&year=" + year, {headers: this.headers});
  }

  //hieu suat
  getStatisticPerformance(roomType: String, roomName: String, month: String, year: String): Observable<number> {
    return this.httpClient.get<number>(this.URL_STATISTIC_PERFORMANCE + "?roomType=" + roomType + "&roomName=" + roomName + "&month=" + month + "&year=" + year, {headers: this.headers});
  }

  //tong so lan su dung
  getStatisticTotalUser(roomType: String, roomName: String, month: String, year: String): Observable<number> {
    return this.httpClient.get<number>(this.URL_STATISTIC_TOTAL_USE + "?roomType=" + roomType + "&roomName=" + roomName + "&month=" + month + "&year=" + year, {headers: this.headers});
  }

  getById(id: String): Observable<any> {
    return this.httpClient.get(this.URL_STATISTIC_BY_TIME + '/' + id, {headers: this.headers});
  }

  cancel(id: String): Observable<any> {
    console.log(id);
    return this.httpClient.delete(this.URL_STATISTIC_BY_TIME + '/cancel/' + id, {headers: this.headers});
  }

  getListIsCancel() {
    return this.httpClient.get<any[]>(this.URL_STATISTIC_BY_TIME + '/getListRegistrationHistoryNotCancel', {headers: this.headers});
  }

  getListSearch(roomName: string, dateStart: string, dateEnd: string, status: string, roomType: string) {
    return this.httpClient.get(this.URL_STATISTIC_BY_TIME + '/search?roomName=' + roomName + '&dateStart=' + dateStart + '&dateEnd=' + dateEnd + '&status=' + status + '&roomType=' + roomType, {headers: this.headers});
  }

  getHistoryByRoomId(roomId: string) {
    return this.httpClient.get(this.URL_HISTORY_BY_ROOM_ID + "?roomId=" + roomId, {headers: this.headers});
  }

  getAllById(id: string) {
    return this.httpClient.get(this.URL_API_HISTORY_ALL + "/list/" + id, {headers: this.headers}).pipe(
      catchError((error) => {
        if (error.status === 204)
          return throwError("không tìm thấy phòng với mã là " + id);
        return throwError("không tìm thấy phòng với mã là " + id);
      }));

  }

}
