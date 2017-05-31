import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../../_models/task';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.html',
})
export class TaskFormComponent {

  items: Task;
  model: any = {};
  title: string;
  @Output() createTask = new EventEmitter();

  addTask(form: NgForm) {
    if (this.model.title.length) {
      this.title = this.model.title.trim();
      this.createTask.emit(this.title);
    }
    form.onReset();
  }

}
