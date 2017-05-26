import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../_services/auth.service";

@Component({
  // moduleId: module.id,
  templateUrl: './authentication.component.html',
})

export class AuthenticationComponent {
  error: any;
  success: string;
  isActive: boolean = true;

  constructor(public afService: AuthService, private router: Router) {
  }

  loginWithGoogle() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.afService.addUserInfo();
      this.router.navigate(['dashboard']);
    });
  }

  loginWithEmail(event, email, password) {
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['dashboard']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
  //registers the user and logs them in
  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {

      this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.isActive = true;
        this.success = "You succes registered. Please Login to your account."
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }

  displayForm() {
    this.isActive = !this.isActive;
  }

}
