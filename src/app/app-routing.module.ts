import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListRxComponent } from './todo/todo-list-rx/todo-list-rx.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';


export const APP_ROUTES: Routes = [
    {
        path: '',
        component: TodoListComponent,
    },
    {
        path: 'rx',
        component: TodoListRxComponent,
    },
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
