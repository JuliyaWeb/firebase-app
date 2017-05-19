import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from "../_models/user";
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
  private users = new Headers({ 'Content-Type': 'application/json' });
  private randomUsers: string = 'https://randomuser.me/api/?results=10'; // URL random api

  constructor(private http: Http) { }
  // Get users from random api
  getUsers() {
    return this.http.get(this.randomUsers)
      .map((res) => {
        res.json();
        let data = res.json().results;
        for (let key in data) {
          data[key].id = +key + 1;
        }
        localStorage.setItem('usersData', JSON.stringify(data));
        return data;
      });
  }


}
