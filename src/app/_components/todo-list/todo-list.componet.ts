import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../../_services/todo.service';
import {AuthService} from '../../_services/auth.service';
import {Task} from '../../_models/task';

@Component({
  templateUrl: './todo-list.component.html',
  providers: [TodoListService]
})
export class TodoListComponent implements OnInit {

  items: Task[] = [];

  constructor(private todoService: TodoListService, private auth: AuthService) {
  }

  ngOnInit() {
    // Get Users Tasks
    if (this.auth.uid) {
      this.todoService.tasksAll.subscribe(
        data => {
          this.items = data.filter(d => d.uid === this.auth.uid);
        }
      );
    }
  }

  toggle(item: Task) {
    item.completed = !item.completed;
  }

  deleteTask(item: Task) {
    this.todoService.removeTask(item);
  }

}
