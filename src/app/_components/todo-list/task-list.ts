import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Task} from '../../_models/task';

@Component({
  selector: 'task-list',
  template: `
    <div class="task-list">
      <task-item *ngFor="let item of items; let i=index;"
      [ngClass]="{'odd': i % 2 == 0}"
                 [item]="item"
                 (remove)="remove.emit(item)"
                 (update)="update.emit({item: item, changes: $event});">

      </task-item>
    </div>
  `,

})
export class TaskListComponent {

  @Input() items: Task[] = [];
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

}
