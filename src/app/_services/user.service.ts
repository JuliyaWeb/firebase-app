import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private Headers = new Headers({'Content-Type': 'application/json'});
  private randomUsers: string = 'https://randomuser.me/api/?results=3'; // URL random api

  constructor(private http: Http) {
  }

  // Get users from random api
  public getUsers() {
    return this.http.get(this.randomUsers)
      .map((res) => {
        let data: any[] = res.json().results;
        for (let key in data) {
          data[key].id = +key + 1;
        }
        localStorage.setItem('usersData', JSON.stringify(data));

        return res.json();
      });
  }
}
