import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoStoreRxService } from '../shared/todo-store-rx.service';
import { Todo } from '../shared/todo.model';


@Component({
    selector: 'app-todo-list-rx',
    templateUrl: './todo-list-rx.component.html',
    styleUrls: ['./todo-list-rx.component.css'],
})
export class TodoListRxComponent implements OnInit {
    newTodoBody = '';
    todos: Observable<Todo[]>;

    constructor(private todoStore: TodoStoreRxService) {
    }

    ngOnInit(): void {
        this.todos = this.todoStore.todos;
        this.todoStore.initTodosFromStorage();
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
