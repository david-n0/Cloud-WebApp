import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {DisplayUsersComponent} from "./components/display-users/display-users.component";
import {AuthGuard} from "../auth.guard";
import {LogInComponent} from "./components/login/login.component";
import {DisplayUsersAuthGuard} from "./components/display-users/display-users-auth.guard";
import {AddUserAuthGuard} from "./components/add-user/add-user-auth.guard";
import {EditUserAuthGuard} from "./components/edit-user/edit-user-auth.guard";
import {CreateNodeComponent} from "./components/create-node/create-node.component";
import {CreateNodeAuthGuard} from "./components/create-node/node-create-auth.guard";
import {SearchNodeComponent} from "./components/search-node/search-node.component";
import {NodeSearchAuthGuard} from "./components/search-node/node-search-auth.guard";
import {ScheduleNodeAuthGuard} from "./components/schedule-node/schedule-node-auth.guard";
import {ScheduleNodeComponent} from "./components/schedule-node/schedule-node.component";
import {ErrorMessageService} from "./services/error-message-service/error-message.service";
import {ErrorMessageComponent} from "./components/error-message/error-message.component";

const routes: Routes = [
  {
    path: 'logIn',
    component: LogInComponent,
  },
  {
    path: 'displayUsers',
    component: DisplayUsersComponent, canActivate: [DisplayUsersAuthGuard]
  },
  {
    path: 'addUser',
    component: AddUserComponent, canActivate: [AddUserAuthGuard]
  },
  {
    path: 'editUser',
    component: EditUserComponent, canActivate: [EditUserAuthGuard]
  },
  {
    path: 'nodes',
    component: SearchNodeComponent, canActivate: [NodeSearchAuthGuard]
  },
  {
    path: 'createNode',
    component: CreateNodeComponent, canActivate: [CreateNodeAuthGuard]
  },
  {
    path: 'scheduleNode',
    component: ScheduleNodeComponent, canActivate: [ScheduleNodeAuthGuard]
  },
  {
    path: 'errors',
    component: ErrorMessageComponent, canActivate: [ScheduleNodeAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
