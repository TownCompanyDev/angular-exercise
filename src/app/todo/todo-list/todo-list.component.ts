import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../shared/todo-store.service';
import { Todo } from '../shared/todo.model';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
    newTodoBody = '';
    todos: Todo[];

    constructor(private todoStore: TodoStoreService) {
        this.todoStore.initTodosFormStorage();
    }

    ngOnInit(): void {
        this.todos = this.todoStore.todos;
    }

    /**
     * 새로운 Todo를 추가합니다.
     * @param {string} body
     */
    addTodo(body: string): void {
        // TODO : 이 부분을 구현하세요.
    }

    /**
     * Todo의 완료 여부를 토글합니다.
     * @param {Todo} todo
     */
    toggleTodo(todo: Todo): void {
        // TODO : 이 부분을 구현하세요.
    }

    /**
     * Todo를 지웁니다.
     * @param {Todo} todo
     */
    removeTodo(todo: Todo): void {
        // TODO : 이 부분을 구현하세요.
    }
}
