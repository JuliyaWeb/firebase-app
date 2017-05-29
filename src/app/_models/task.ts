export class Task {
  $key?: string;

  constructor(public title: string, public uid: string, public completed = false) {
  }

}
