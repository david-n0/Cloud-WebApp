import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "./services/log-in-service/log-in.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readPermission: boolean
  createPermission: boolean
  title = 'PRJ_NWP_FRONTEND';
  constructor(private router: Router,private loginService: LogInService) {
    this.readPermission = this.loginService.getPermissions().includes("can_read_users")
    this.createPermission = this.loginService.getPermissions().includes("can_create_users")
  }
  ngOnInit(): void{
    this.router.navigate(['logIn'])

  }
}
