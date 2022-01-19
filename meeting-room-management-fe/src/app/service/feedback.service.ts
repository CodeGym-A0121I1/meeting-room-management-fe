import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../models/Feedback";
import {RoomDTO} from "../models/dto/RoomDTO";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  URL_API = "http://localhost:8080/api/feedbacks"
  headers = new HttpHeaders({
    'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjYzMzI3OCwiaWF0IjoxNjQyNTk3Mjc4fQ.PcdU7vpJx6los_MKRbnW1O3UJ6hE3t2YVthrJngtEQeVkVuMZTNpWJ7qn7ueU3wYkE2sb7mO-Ccorcb8N9agPw"
  })


  constructor(private httpClient: HttpClient) {
  }

  getAllRoomDTO(): Observable<RoomDTO[]> {
    return this.httpClient.get<RoomDTO[]>("http://localhost:8080/api/rooms/dto", {headers: this.headers})
  }

  create(feedback: Feedback): Observable<boolean> {
    return this.httpClient.post<boolean>(this.URL_API, feedback, {headers: this.headers})
  }
}
