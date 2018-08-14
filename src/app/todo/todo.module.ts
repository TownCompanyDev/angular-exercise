import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        TodoListComponent,
        TodoListItemComponent,
    ],
    exports: [
        TodoListComponent,
        TodoListItemComponent,
    ],
})
export class TodoModule {
}
