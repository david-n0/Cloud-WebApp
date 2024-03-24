import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogInService} from "../../services/log-in-service/log-in.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {

  public email: string | undefined;
  public password: string | undefined;
  // public jwt: string ='';
  public printError: boolean = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private logInService: LogInService,
  ) {
  }

  ngOnInit(): void {
  }


  login() {
    this.logInService.logIn(this.email, this.password).subscribe((response) => {

        // const data = JSON.stringify(response) // json ceo string obj
        // const data2 = JSON.parse(data) // parsira se
        // const jwt = data2.jwt; // uzima se samo value za jwt

        this.logInService.setToken(response.jwt)
        this.logInService.setPermissions(response.permissions)

        if (response.jwt != ""  && response.permissions != "[]") {
          console.log("-JWT VRACEN: " + response.jwt + " -")
          //localStorage.setItem('jwt', jwt);
          this.router.navigate(['/displayUsers'])
        } else {
          this.printError = true;
        }

      },
      error => {
        console.log(error)
        this.printError = true
      });

  }

}
