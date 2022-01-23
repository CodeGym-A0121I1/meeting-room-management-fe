import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../model/feedback/Feedback";
import {RoomDTO} from "../model/dto/RoomDTO";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private readonly URL_API = "http://localhost:8080/api/feedbacks";
  private readonly jwtToken = this.authService.getToken() || "";

  headers = new HttpHeaders({
    'Authorization': this.jwtToken
  });

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getAllRoomDTO(): Observable<RoomDTO[]> {
    return this.httpClient.get<RoomDTO[]>("http://localhost:8080/api/rooms/dto", {headers: this.headers})
  }

  create(feedback: Feedback): Observable<boolean> {
    return this.httpClient.post<boolean>(this.URL_API, feedback, {headers: this.headers})
  }
  getAll(): Observable<Feedback[]> {
    return this.httpClient.get<Feedback[]>(this.URL_API, {headers: this.headers})
  }

  update(id:string,noteResponse:string): Observable<boolean>{
    return this.httpClient.put<boolean>(this.URL_API+'/'+id,noteResponse,{headers: this.headers})
  }
}
