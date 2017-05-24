import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./_guards/auth.guard";
import {DashboardComponent,
  UsersComponent,
  UserDetailComponent,
  AuthenticationComponent,
  DetailComponent } from "./_components/index";

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'test',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
