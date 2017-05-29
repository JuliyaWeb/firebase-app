import { Component } from "@angular/core";
import { AuthService } from "../../_services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  constructor(public afService: AuthService) {
    // console.log('user', this.afService.user);
    // console.log('user', this.afService.currentUser);
  }

}
