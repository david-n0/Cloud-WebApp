import {Component, OnInit} from '@angular/core';
import {User} from "../../model";
import {HttpClient} from "@angular/common/http";
import {DisplayUserService} from "../../services/display-users-service/display-user.service";
import {Observable} from "rxjs";
import {RoleService} from "../../services/role-service/role.service";
import {Router} from "@angular/router";
import {LogInService} from "../../services/log-in-service/log-in.service";
import {EditUserService} from "../../services/edit-user-service/edit-user.service";

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  public users: User[] = []
  public permissions: String[] = []
  public intersection: String[] = []
  public allPermissions: String[] = ["can_create_users", "can_read_users", "can_update_users", "can_delete_users"];
  public hasAccess: boolean = false;
  public canDelete: boolean = false
  public canEdit: boolean = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private displayUserService: DisplayUserService,
    private editUserService: EditUserService,
    private roleService: RoleService, private loginService: LogInService) {

  }

  ngOnInit(): void {
    if (this.loginService.getPermissions().length > 0) {
      this.hasAccess = true
    }

    if (this.hasAccess) {
      console.log("IMA PERMISIONS");

      if (this.loginService.getPermissions().includes("can_delete_users")) {
        this.canDelete = true
        console.log("CAN DELETE PERMISSION")
      }

      if (this.loginService.getPermissions().includes("can_update_users")) {
        this.canEdit = true
        console.log("CAN EDIT PERMISSION")
      }

      this.getAllUsers()
    } else {
      console.log("NEMA PERMISIONS");
    }

  }

  getAllUsers() {
    this.displayUserService.getAllUsers().subscribe((users) => {
        this.users = users
        console.log(users);
      }
    )
  }

  goToEditUser(user: User ) {
    this.editUserService.setUser(user)
    this.router.navigate(['editUser']);
  }

  deleteUser(id: String | undefined) {
    console.log("DELETE DC " + id)
    this.displayUserService.deleteUser(id).subscribe((data) => {
      this.getAllUsers()
      console.log("DELETE SUCESS");
    });


  }
}
