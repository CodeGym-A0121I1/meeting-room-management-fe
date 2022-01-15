import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFeedback} from "../models/IFeedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  URL_API = "http://localhost:8080/api/feedbacks";

  headers = new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MjE2NTQ4NiwiaWF0IjoxNjQyMTI5NDg2fQ.zTs1pQHH88PQUpr4i9HyD7C2JWfp7iweYC4yFIXph5XYFKiqObPor0Ia4RltewX2WixjW-FgObwO-Vb8jz4u4A"
    });

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IFeedback[]> {
    return this.httpClient.get<IFeedback[]>(this.URL_API,{headers: this.headers})
  }
}
