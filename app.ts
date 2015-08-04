/// <reference path="typings/angular2/angular2.d.ts" />
import { Component, View, NgFor, bootstrap } from 'angular2/angular2';

@View({
  templateUrl : "view.html",
  directives: [NgFor]
})

@Component({
  selector : "todo-app"
})

class TodoAppComponent {
  todos : Array<string>;

  constructor(){
    this.todos = [{ text : "Go Home", done : true }]
  }

  add($event,newtodo){
      if($event.which === 13){
        this.todos.unshift({ text : newtodo.value, done : false });
        newtodo.value = '';
      }
  }

  markAsDone(todo){
    todo.done = !todo.done;
  }

}

bootstrap(TodoAppComponent);
