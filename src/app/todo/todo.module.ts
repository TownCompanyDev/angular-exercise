import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListRxComponent } from './todo-list-rx/todo-list-rx.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
        TodoListRxComponent,
    ],
    exports: [
        TodoListComponent,
        TodoListItemComponent,
        TodoListRxComponent,
    ],
})
export class TodoModule {
}
