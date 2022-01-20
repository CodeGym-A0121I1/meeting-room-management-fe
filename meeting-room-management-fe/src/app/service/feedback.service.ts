import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../models/Feedback";
import {RoomDTO} from "../models/dto/RoomDTO";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  URL_API = "http://localhost:8080/api/feedbacks";

  headers = new HttpHeaders({
    'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjY5NTQyOCwiaWF0IjoxNjQyNjU5NDI4fQ.KohdYKYs9TuTAn3tQxomN0h7dddgil_6GDqC0Xd5rGi2J848VcsIFpcOCItYze6UqEXd_w9vXxtcq672C-Hs0Q"
  });

  constructor(private httpClient: HttpClient) {
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
