import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Task } from '../_models/task';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TodoListService {

  public tasksUsers: FirebaseListObservable<any>;
  public task: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire, private auth: AuthService) {
    console.log('constructor');
    if (this.auth.uid) {
      console.log('true');
      this.task = this.af.database.object('tasksUsers/' + auth.uid);
    }
    this.tasksUsers = this.af.database.list('tasksUsers');
  }

  createTask(title) {
    console.log('title=>', title);
    console.log('this.auth.uid=>', this.auth.uid);

    this.tasksUsers.push({
      completed: false,
      title: title,
      uid: this.auth.uid
    });
  }

  removeTask(task: Task): firebase.Promise<any> {
    return this.tasksUsers.remove(task.key);
  }
  //
  // updateTask(task: ITask, changes: any): firebase.Promise<any> {
  //   return this.tasks$.update(task.$key, changes);
  // }

}
