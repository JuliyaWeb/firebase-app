import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  constructor(private afSirvice: UserService) { }

  ngOnInit() {
    console.log(this.afSirvice.getUsers());
  }

}
