import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../../_services/todo.service';
import {AuthService} from '../../_services/auth.service';
import {Task} from '../../_models/task';

@Component({
  templateUrl: './todo-list.component.html',
  providers: [TodoListService]
})
export class TodoListComponent implements OnInit {

  public items: Task[] = [];
  public completedTasks: Task[] = [];
  public tasks = [];

  constructor(public todoService: TodoListService, private auth: AuthService) {
  }

  ngOnInit() {
    // Get Users Tasks
    if (this.auth.uid) {
      this.todoService.tasksAll.subscribe(
        data => {
          this.items = data.filter(d => d.uid === this.auth.uid && d.completed !== true);
          this.completedTasks = data.filter(d => d.uid === this.auth.uid && d.completed === true);
          this.tasks = [];
          data.filter(d => {
            if (d.uid === this.auth.uid && d.completed !== true) {
              let start: string;
              if (d.date) {
                start = d.date;
              } else {
                start = this.formatDate(new Date(d.timestamp));
              }
              this.tasks.push({
                'title': d.title,
                'start': start
              });
            }
          });
        });
    }
  }

  formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();

    return yy + '-' + mm + '-' + dd;
  }

}
