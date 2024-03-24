import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private apiUrl: string = 'http://localhost:8080/api/user';
  private jwt: string | null | undefined;

  constructor(private httpClient: HttpClient) {
  }

  addUser(user: User): Observable<Object>{
    this.jwt = localStorage.getItem("jwt")
    return this.httpClient.post(`${this.apiUrl}`, user,{
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    });
  }

}
