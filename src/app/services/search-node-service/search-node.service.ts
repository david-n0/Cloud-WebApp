import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {LogInService} from "../log-in-service/log-in.service";
import {Observable} from "rxjs";
import {Node, User} from "../../model";

@Injectable({
  providedIn: 'root'
})
export class SearchNodeService {

  apiUrl: string = 'http://localhost:8080/api/nodes';
  jwt: string | null | undefined;

  constructor(private httpClient: HttpClient, private loginService: LogInService) {
  }

  getAll(): Observable<Node[]> {
    this.jwt = this.loginService.getJwt()
    console.log(this.jwt + " JWT SNSERVICE")
    return this.httpClient.get<Node[]>(`${this.apiUrl}` + "/all", {
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    });
  }

  searchNode(name: string, statusString: string, dateFrom: string, dateTo: string): Observable<Node[]> {

    let status: string[] = statusString.split(',')

    this.jwt = this.loginService.getJwt()
    console.log(this.jwt + " JWT SNSERVICE")

    let params = new HttpParams();
    params = params.append('name', name).append('status', status.toString())
    if (dateFrom != '' && dateTo != '')
      params = params.append('dateFrom', dateFrom).append('dateTo', dateTo)

    return this.httpClient.get<Node[]>(this.apiUrl, {
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }, params: params
    })
  }

  deleteNode(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.delete(`${this.apiUrl}/${id}`, options)
  }


  start(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id);
    let options = {headers: headers, params: params};
    return this.httpClient.get(`${this.apiUrl}/start`, options)
  }

  stop(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id);
    let options = {headers: headers, params: params};
    return this.httpClient.get(`${this.apiUrl}/stop`, options)
  }

  restart(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id);
    let options = {headers: headers, params: params};
    return this.httpClient.get(`${this.apiUrl}/restart`, options)
  }
}
