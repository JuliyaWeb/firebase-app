import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Task} from '../_models/task';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class TodoListService {

  public tasksAll: FirebaseListObservable<any>;
  public task: FirebaseObjectObservable<any>;
  public tasksUsers: Task[] = [];

  constructor(public af: AngularFire, private auth: AuthService) {
    if (this.auth.uid) {
      this.task = this.af.database.object('tasksUsers/' + this.auth.uid);
    }
    this.tasksAll = this.af.database.list('tasksUsers');
  }

  createTask(title) {
    this.tasksAll.push(new Task(title, this.auth.uid));
  }

  removeTask(task: Task) {
    return this.tasksAll.remove(task.$key);
  }

  // updateTask(task: ITask, changes: any): firebase.Promise<any> {
  //   return this.tasks$.update(task.$key, changes);
  // }
}
