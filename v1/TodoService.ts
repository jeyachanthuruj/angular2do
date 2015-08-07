/**
 * Created by jeyachanthuruj on 8/7/15.
 */

export class TodoService {

    todos : Array<Object>;

    constructor(){
        this.todos = [{ text : "Go Home", done : true }]
    }

    get(){
        return this.todos;
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