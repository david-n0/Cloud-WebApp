import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtWrapper} from "../../model";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  apiUrl: string = 'http://localhost:8080/api/login';
  private permissions: string[]
  private jwt: string

  constructor(private httpClient: HttpClient) {
    this.jwt = localStorage.getItem("jwt") || ''
    this.permissions = []
    let temp = (localStorage.getItem("permissions") || '').replace("[", "").replace("]", "").split(",")
    temp.forEach(p => this.permissions.push(p.replace(" ", "")))

  }

  setToken(newToken: string): void {
    this.jwt = newToken
    localStorage.setItem("jwt", this.jwt)
    console.log(newToken)
  }

  setPermissions(newPermissions: string): void {
    localStorage.setItem("permissions", newPermissions)
    let temp = newPermissions.replace('[', '').replace("]", "").split(',')
    this.permissions = []
    temp.forEach(p => this.permissions.push(p.replace(" ", "")))
  }

  public getJwt(): string {
    return this.jwt
  }

  public getPermissions(): string[] {
    return this.permissions
  }

  logIn(username: string | undefined, password: string | undefined): Observable<JwtWrapper> {

    return this.httpClient.post<JwtWrapper>(`${this.apiUrl}`, {username: username, password: password})
  }
}
