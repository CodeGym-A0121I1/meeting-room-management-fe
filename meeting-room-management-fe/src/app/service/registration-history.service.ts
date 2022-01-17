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
    URL_API_HISTORY = "http://localhost:8080/api/registration-histories/signupRoom"
    ROOM_API_URL = "http://localhost:8080/api/rooms"
    ROOMTYPE_API_URL = "http://localhost:8080/api/rooms/roomTypes"
    AREAS_API_URL = "http://localhost:8080/api/rooms/areas"
    CATEGORY_API_URL = "http://localhost:8080/api/categories"


    constructor(private httpClient: HttpClient) {
    }

    SignupHistory(history: RegistrationHistory): Observable<RegistrationHistory> {
        return this.httpClient.post<RegistrationHistory>(this.URL_API_HISTORY, history);
    }

    getAllRoom(): Observable<Room[]> {
        return this.httpClient.get<Room[]>(this.ROOM_API_URL);
    }
    //show ra all các loại  phòng

    getAllRoomType(): Observable<RoomType[]> {
        return this.httpClient.get<RoomType[]>(this.ROOMTYPE_API_URL);
    }
    //Shơ ea all khu vục phòng hợp

    getAllAreas(): Observable<Area[]> {
        return this.httpClient.get<Area[]>(this.AREAS_API_URL);
    }
//show all các loại thiết bị
    getAllCategry(): Observable<ICategory[]> {
        return this.httpClient.get<ICategory[]>(this.CATEGORY_API_URL);
    }


}
