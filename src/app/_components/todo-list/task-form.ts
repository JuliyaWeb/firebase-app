import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../_services/todo.service';
import { Task } from '../../_models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.html',
  providers: [TodoListService]
})
export class TaskFormComponent implements OnInit {

  items: Task;
  model: any = {};

  constructor(private todoServise: TodoListService) {
  }

  ngOnInit() {
  }

  addTask(form: NgForm) {
    if (this.model.title) {
      this.todoServise.createTask(this.model.title);
    }
    form.onReset();
  }

}
