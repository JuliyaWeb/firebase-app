import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../../_services/todo.service';
import {Task} from '../../_models/task';

@Component({
  templateUrl: './todo-list.component.html',
  providers: [TodoListService]
})
export class TodoListComponent implements OnInit {

  // items: Task[] = [];

  constructor(private todoService: TodoListService) {
  }

  ngOnInit() {

  }

}
