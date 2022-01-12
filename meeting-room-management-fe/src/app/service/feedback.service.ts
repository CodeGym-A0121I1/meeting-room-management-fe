import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFeedback} from "../models/IFeedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  URL_API = "http://localhost:8080/api/feedbacks"
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaHVvbmd0dCIsImV4cCI6MTY0MTk5OTY3NCwiaWF0IjoxNjQxOTYzNjc0fQ.oY3CmYXIDtxk3wyNjHS9HGfSg9enSoXceZDkwoPLoHcGt87Y4W9jcWOV6dB07iv7GuTebxO3quTipezGe-5p1A"
    })
  }

  constructor(private httpClient: HttpClient) {
  }

}
