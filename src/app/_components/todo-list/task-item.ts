import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Task} from '../../_models/task';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.html',

})
export class TaskItemComponent {

  @Input() item: Task;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  editing: boolean = false;
  title: string;

  editTitle(): void {
    this.editing = true;
    this.title = this.item.title;
    console.log('edit', this.title);
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.item.title) {
        this.update.emit({title});
        console.log('ddd', title);
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.update.emit({
      completed: !this.item.completed
    });
  }
}
