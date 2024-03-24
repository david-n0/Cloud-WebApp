import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogInService} from "../log-in-service/log-in.service";
import {ErrorMessage} from "../../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  private readonly apiUrl = 'http://localhost:8080/api/errors'

  constructor(private httpClient: HttpClient, private loginService: LogInService) { }

  getAll(): Observable<ErrorMessage[]> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.get<ErrorMessage[]>(this.apiUrl, options)
  }
}
