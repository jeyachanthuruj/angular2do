/**
 * Created by jeyachanthuruj on 8/7/15.
 */
var TodoService = (function () {
    function TodoService() {
        this.todos = [{ text: "Go Home", done: true }];
    }
    TodoService.prototype.get = function () {
        return this.todos;
    };
    TodoService.prototype.add = function ($event, newtodo) {
        if ($event.which === 13) {
            this.todos.unshift({ text: newtodo.value, done: false });
            newtodo.value = '';
        }
    };
    TodoService.prototype.markAsDone = function (todo) {
        todo.done = !todo.done;
    };
    return TodoService;
})();
exports.TodoService = TodoService;
