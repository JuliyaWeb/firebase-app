import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from "../../_models/user";

@Component({
  moduleId: module.id,
  templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
  users: User[] = [];
  user: any;
  userId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    let data = localStorage.getItem('usersData');
    this.users = JSON.parse(data);
    this.user = this.users.find((d: any) => d.id == this.userId);
  }

  backGo(){
    this.router.navigate(['/users']);
  }

}
