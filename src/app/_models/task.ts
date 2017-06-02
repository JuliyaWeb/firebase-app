export class Task {
  $key?: string;

  constructor(public title: string,
              public uid: string,
              public date: string = '',
              public completed = false,
              public timestamp = Date.now()) {
  }

}
