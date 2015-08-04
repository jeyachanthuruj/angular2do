var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TodoAppComponent = (function () {
    function TodoAppComponent() {
        this.todos = [{ text: "Go Home", done: true }];
    }
    TodoAppComponent.prototype.add = function ($event, newtodo) {
        if ($event.which === 13) {
            this.todos.unshift({ text: newtodo.value, done: false });
            newtodo.value = '';
        }
    };
    TodoAppComponent.prototype.markAsDone = function (todo) {
        todo.done = !todo.done;
    };
    TodoAppComponent = __decorate([
        angular2_1.View({
            templateUrl: "view.html",
            directives: [angular2_1.NgFor]
        }),
        angular2_1.Component({
            selector: "todo-app"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoAppComponent);
    return TodoAppComponent;
})();
angular2_1.bootstrap(TodoAppComponent);
