import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/login/login.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateNodeComponent } from './components/create-node/create-node.component';
import { SearchNodeComponent } from './components/search-node/search-node.component';
import { ScheduleNodeComponent } from './components/schedule-node/schedule-node.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DisplayUsersComponent,
    AddUserComponent,
    EditUserComponent,
    CreateNodeComponent,
    SearchNodeComponent,
    ScheduleNodeComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
