import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateNodeService {
  private apiUrl: string = 'http://localhost:8080/api/nodes';
  private jwt: string | null | undefined;

  constructor(private httpClient: HttpClient) {
  }

  createNode(name: String): Observable<Node>{
    this.jwt = localStorage.getItem("jwt")
    return this.httpClient.post<Node>(`${this.apiUrl}`,{name},{
      headers: {
        'Authorization': 'Bearer ' + this.jwt
      }
    });
  }

}
