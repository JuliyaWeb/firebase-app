import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { Router } from '@angular/router';
import { User } from "../../_models/user";


@Component({
  // moduleId: module.id,
  templateUrl: './users.component.html',
  providers: [UserService]
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      res => {
        let data = res.results;
        for (let key in data) {
          data[key].id = +key + 1;
        }

        this.users = data;
      }
    );
  }

  gotoDetail(user: User) {
    let link = ['/user', user.id];
    this.router.navigate(link);
  }

}
