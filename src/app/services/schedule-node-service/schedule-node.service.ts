import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {LogInService} from "../log-in-service/log-in.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScheduleNodeService {

  private apiUrl: string = 'http://localhost:8080/api/nodes/schedule';
  private jwt: string | null | undefined;

  constructor(private httpClient: HttpClient, private loginService: LogInService) { }

  scheduleNode(id: string, date: string, operation: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id).append('date', date).append('operation', operation);
    let options = {headers: headers, params: params};
    return this.httpClient.post(this.apiUrl, {}, options)
  }
}
