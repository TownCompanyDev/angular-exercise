import { Injectable } from '@angular/core';
import { StorageService } from '../../core/storage.service';
import { Todo } from './todo.model';


@Injectable({
    providedIn: 'root',
})
export class TodoStoreService {
    static readonly storageName = 'TODO_STORAGE';

    todos: Todo[] = [];

    constructor(private storage: StorageService) {
    }

    /**
     * 저장소로부터 Todo 리스트를 가져옵니다.
     */
    initTodosFormStorage(): void {
        if (this.storage.has(TodoStoreService.storageName)) {
            this.todos = this.storage.get<Todo[]>(TodoStoreService.storageName);
        }
    }

    /**
     * Todo를 추가합니다.
     * 저장소에 추가된 Todo를 저장합니다.
     * @param {string} body
     */
    add(body: string): void {
        const todo: Todo = {
            body,
            completed: false,
        };

        // TODO : 이 부분을 구현하세요.
    }

    /**
     * Todo를 지웁니다.
     * 또한, 저장소에 저장된 정보도 업데이트 합니다.
     * @param {Todo} todo
     */
    remove(todo: Todo): void {
        // TODO : 이 부분을 구현하세요.
    }

    /**
     * Todo의 완료 여부를 토글합니다.
     * 완료되지 않은 Todo인 경우 완료하고,
     * 완료한 Todo인 경우 미완료로 변경합니다.
     *
     * 마찬가지로 저장소에 변경된 정보를 업데이트 합니다.
     * @param {Todo} todo
     */
    toggleCompletion(todo: Todo): void {
        // TODO : 이 부분을 구현하세요.
    }

    private saveTodosToStorage(): void {
        this.storage.set(TodoStoreService.storageName, this.todos || []);
    }
}
