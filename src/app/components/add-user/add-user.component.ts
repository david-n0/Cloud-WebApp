import {Component, OnInit} from '@angular/core';
import {AddUserService} from "../../services/add-user-service/add-user.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model";
import {NgForm} from "@angular/forms";
import {RoleService} from "../../services/role-service/role.service";
import {LogInService} from "../../services/log-in-service/log-in.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userAdded: boolean = false;
  errorPrint: boolean = false
  hasAccess: boolean = false;
  name: string = "";
  surname: string = "";
  username: string = "";
  password: string = "";
  selectedPermissions: string[] = [];
  public permissions: String[] = []
  public intersection: String[] = []
  public allPermissions: String[] = ["can_create_users", "can_read_users", "can_update_users", "can_delete_users",
    "can_search_nodes", "can_start_nodes", "can_stop_nodes", "can_restart_nodes", "can_create_nodes", "can_destroy_nodes"];
  public forThisPermissions: String[] = ["can_create_users", "can_update_users", "can_delete_users"];
  public user: User = new User();

  constructor(private httpClient: HttpClient,
              private addUserService: AddUserService,
              private loginService: LogInService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    if (this.loginService.getPermissions().length > 0) {
      this.hasAccess = true
    }

    if (this.hasAccess) {
      console.log("IMA PERMISIONS");

    } else {
      console.log("NEMA PERMISIONS");
    }
    //  })

  }


  addUser(form: NgForm) {
    if (localStorage.getItem("jwt") != "") {
      if (this.hasAccess == true) {

        if (form.valid) {
          // Add user with email and password here
          this.user.name = this.name
          this.user.surname = this.surname
          this.user.username = this.username
          this.user.password = this.password
          this.user.permissions = this.selectedPermissions

          this.addUserService.addUser(this.user).subscribe(data => {
              console.log(this.user);
              this.userAdded = true;


            },
            error => console.log(error));

        }

      }

    }

  }

}
