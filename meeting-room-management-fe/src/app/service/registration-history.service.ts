import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegistrationHistory} from "../model/RegistrationHistory";

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

  getById(id:String):Observable<any>{
    return this.httpClient.get(this.url+'/'+id);
  }

  cancel(id:String):Observable<any>{
    console.log(id);
    return this.httpClient.delete(this.url+'/cancel/'+id);
  }

  getListIsCancel(){
    return this.httpClient.get<any[]>(this.url+'/getListRegistrationHistoryNotCancel');
  }

  getListSearch(roomName: string, dateStart: string, dateEnd: string, status: string, roomType: string){
    return this.httpClient.get(this.url+'/search?roomName='+roomName+'&dateStart='+dateStart +'&dateEnd='+dateEnd+'&status='+ status +'&roomType='+roomType);
  }

}
