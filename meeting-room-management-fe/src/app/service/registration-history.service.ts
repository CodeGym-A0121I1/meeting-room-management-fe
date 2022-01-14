import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationHistoryService {
  readonly url = "http://localhost:8080/api/registration-histories";
  readonly urlRoom ="http://localhost:8080/api/rooms";
  constructor(private httpClient: HttpClient) {

  }
  getAll(){
    return this.httpClient.get(this.url);
  }
  getAllRoomType(){
    return this.httpClient.get<any[]>(this.urlRoom+'/roomTypes');
  }

}
