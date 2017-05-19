import {Component, OnInit} from "@angular/core";
import {UserService} from "../../_services/user.service";
import {Router} from '@angular/router';
import {User} from "../../_models/user";

@Component({
  moduleId: module.id,
  templateUrl: 'users.component.html',
  providers: [UserService]
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.userService.getUsers().then(users => {this.users = users;  console.log(users);});

    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  gotoDetail(user: User) {
    let link = ['/user', user.id];
    this.router.navigate(link);
  }

}
