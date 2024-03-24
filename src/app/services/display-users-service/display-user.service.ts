import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model";
import {RoleService} from "../role-service/role.service";
import {LogInService} from "../log-in-service/log-in.service";

@Injectable({
  providedIn: 'root'
})
export class DisplayUserService {


  apiUrl: string = 'http://localhost:8080/api/user';
  jwt: string | null | undefined;

  constructor(private httpClient: HttpClient,private loginService: LogInService) {
  }

  getAllUsers() {
    //this.jwt = localStorage.getItem("jwt")
    this.jwt = this.loginService.getJwt()
    console.log(this.jwt + " JWT DSERVICE")
    return this.httpClient.get<User[]>(`${this.apiUrl}`+"/all", {
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    });
  }

  deleteUser(id: String | undefined) {
    //this.jwt = localStorage.getItem("jwt")
    this.jwt = this.loginService.getJwt()
    console.log("FRONT DELETING USER: "+id)
    console.log(this.jwt + " JWT DSERVICE")

    return this.httpClient.delete(`${this.apiUrl}`+"/delete/"+`${id}`, {
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    });
  }
}
