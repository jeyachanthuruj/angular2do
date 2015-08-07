import { Component, View, NgFor, bootstrap } from 'angular2/angular2';
import {TodoService} from 'TodoService';


@Component({
  selector : "todo-app",
  appInjector : [TodoService]
})

@View({
  templateUrl : "view.html",
  directives: [NgFor]
})

class TodoAppComponent {

  //todoList : Array<Object>;
  private todoService;

  constructor( todoService : TodoService ){
    this.todoService = todoService;
    //this.todoList = todoService.get();
  }





}

bootstrap(TodoAppComponent);
