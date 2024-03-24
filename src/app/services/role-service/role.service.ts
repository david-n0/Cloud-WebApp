import {Injectable} from '@angular/core';
import {User} from "../../model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl: string = 'http://localhost:8080/api/user';
  jwt: string | null | undefined;

  constructor(private httpClient: HttpClient) {
  }

  getRoles() {
    this.jwt = localStorage.getItem("jwt")
    console.log(this.jwt + " JWT RSERVICE")
    return this.httpClient.get<any>(`${this.apiUrl}` + "/permissions", {
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    });
  }
}
