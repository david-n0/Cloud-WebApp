import {Component, OnInit} from '@angular/core';
import {User} from "../../model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {EditUserService} from "../../services/edit-user-service/edit-user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userName = ""
  public userSurname = ""
  public userUsername = ""
  public selectedPermissions: string[] = [];
  public hasAccess: boolean = false;
  public userPermissions: string[] = []
  public intersection: String[] = []
  public allPermissions: String[] = ["can_create_users", "can_read_users", "can_update_users", "can_delete_users",
    "can_search_nodes", "can_start_nodes", "can_stop_nodes", "can_restart_nodes", "can_create_nodes", "can_destroy_nodes"];
  public forThisPermissions: String[] = ["can_update_users", "can_delete_users"];
  public userUpdated: boolean = false;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private editUserService: EditUserService
  ) {

  }

  ngOnInit(): void {
    let user: User = this.editUserService.getUser()
      this.userName = user.name
      this.userSurname = user.surname
      this.userUsername = user.username
      this.userPermissions = user.permissions

      console.log(user);
      console.log("EDIT:" + this.userUsername)

      console.log("IMA PERMISIONS");
      if (this.userPermissions.includes("can_update_users")) {
        console.log("CAN UPDATE PERMISSION")
      }


  }

  updateUser(form: NgForm) {
    if (localStorage.getItem("jwt") != "") {

      if (form.valid) {

        this.editUserService.updateUser(this.userUsername, this.userName, this.userSurname, String(this.selectedPermissions)).subscribe(data => {
            console.log(this.userUsername);
            console.log("UPDATEC")
            this.userUpdated = true;

          },
          error => console.log(error));

      }

    }
  }
}
