import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';


@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
    @Input() todo: Todo;

    @Output() toggle = new EventEmitter<Todo>();
    @Output() remove = new EventEmitter<Todo>();

    toggleThis(): void {
        this.toggle.emit(this.todo);
    }

    removeThis(): void {
        this.remove.emit(this.todo);
    }
}
