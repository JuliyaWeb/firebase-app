import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {AuthGuard} from "./_guards/auth.guard";
import {ChartsModule} from 'ng2-charts/ng2-charts';
// FireBase
import {AngularFireModule} from 'angularfire2';
// Calendar
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
import {MyDatePickerModule} from 'mydatepicker';
// Services
import {AuthService} from "./_services/auth.service";
import {UserService} from "./_services/user.service";
// Components
import {AppComponent} from "./app.component";
import {
  LayoutComponent,
  NavbarComponent,
  TopNavigationComponent,
  DashboardComponent,
  UsersComponent,
  UserDetailComponent,
  AuthenticationComponent,
  TodoListComponent,
  TaskFormComponent,
  TaskItemComponent,
  TaskListComponent,
  AppCalendarComponent
} from "./_components/index";

// Firebase export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCR6H--Afgs62pTd0FFxasYqc3TLIb6l_s",
  authDomain: "angular-app-c8e7f.firebaseapp.com",
  databaseURL: "https://angular-app-c8e7f.firebaseio.com",
  projectId: "angular-app-c8e7f",
  storageBucket: "angular-app-c8e7f.appspot.com",
  messagingSenderId: "570119546553"
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MyDatePickerModule,
    routing,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    TopNavigationComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
    AuthenticationComponent,
    TodoListComponent,
    TaskFormComponent,
    TaskItemComponent,
    TaskListComponent,
    CalendarComponent,
    AppCalendarComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {

}
