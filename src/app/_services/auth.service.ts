import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState} from 'angularfire2';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";

@Injectable()

export class AuthService {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<any>;
  public uid: string;
  public currentUser: FirebaseAuthState;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.af.database.object('users/' + auth.uid);
          this.uid = auth.uid;
          this.currentUser = auth;
        }
      });

    this.messages = this.af.database.list('messages');
    this.users = this.af.database.list('users');
  }

  /**
   * Check if user is logged in
   */
  userIsLoggedIn() {
    if (!this.currentUser) {
      this.router.navigate(['/login']);
      return false;
    } else return true;
  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }

  /**
   * Add Use rInfo
   */
  addUserInfo() {
    //We saved their auth info now save the rest to the db.
    this.af.auth.subscribe(
      (res) => {
        if (res != null) {

          this.email = res.auth.email;
          this.displayName = res.auth.displayName;

        }
      });


    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    let message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }

  /**
   *
   * @param model
   * @returns {firebase.Promise<void>}
   */
  registerUser(email, password) {
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }

  /**
   *
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
  }

  /**
   * CurrentUser Info
   */

  getUserInfo() {
    this.af.auth.subscribe(
      (auth) => {
        console.log('sss', auth);
        if (auth != null) {
          return auth;
        }
      });
  }


  /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

}
