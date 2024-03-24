import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  apiUrl: string = 'http://localhost:8080/api/user';
  jwt: string | null | undefined;
  private user: User = new User()

  constructor(private httpClient: HttpClient) { }


  updateUser(username: string, name: string, surname: string, permissions: string) :Observable<User> {

    this.jwt = localStorage.getItem("jwt")
    console.log("GETTING USER INFO: "+username)
    console.log("JWT DSERVICE "+this.jwt  )

    this.user.username = username
    this.user.name = name
    this.user.surname = surname
    this.user.permissions = permissions.split(',')

    return this.httpClient.put<User>(`${this.apiUrl}`, this.user,{
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    }, );
  }


  setUser(user: User) {
    this.user = user
  }

  getUser(): User{
    return this.user
  }
}
