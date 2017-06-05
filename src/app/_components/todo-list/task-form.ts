import { Component, EventEmitter, Output } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Task } from '../../_models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.html',
})
export class TaskFormComponent {

  items: Task;
  model: any = {};
  @Output() createTask = new EventEmitter();
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  addTask(form: NgForm) {
    let title: string = this.model.title.trim();
    if (this.model.date) {
      this.createTask.emit({ title: title, date: this.model.date.formatted });
    } else {
      this.createTask.emit({ title: title });
    }
    form.onReset();
  }

}
