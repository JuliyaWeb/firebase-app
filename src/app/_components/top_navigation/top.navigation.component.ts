import {Component} from "@angular/core";
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'top-nav',
  templateUrl: 'top.navigation.component.html'
})

export class TopNavigationComponent {

  constructor(private afService: AuthService, private router: Router) {
  }

  clicked() {
    let body = document.querySelector('body');
    body.classList.toggle('nav-sm');
    body.classList.toggle('nav-md');
  }

  SignOut() {
    this.afService.logout();
    this.router.navigate(['/login']);
  }

}
