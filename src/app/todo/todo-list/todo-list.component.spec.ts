import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StorageService } from '../../core/storage.service';
import { TodoStoreService } from '../shared/todo-store.service';
import { Todo } from '../shared/todo.model';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list.component';


describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    let storage: StorageService;
    let todoDummies: Todo[];

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    CommonModule,
                    FormsModule,
                ],
                providers: [
                    StorageService,
                    TodoStoreService,
                ],
                declarations: [
                    TodoListItemComponent,
                    TodoListComponent,
                ],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        storage = TestBed.get(StorageService);
    });

    beforeEach(() => {
        // 테스트가 시작하기 전에 저장소에 Todo를 넣습니다.
        todoDummies = [
            { body: 'Todo1', completed: false },
            { body: 'Todo2', completed: true },
            { body: 'Todo3', completed: false },
        ];

        storage.set(TodoStoreService.storageName, todoDummies);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        // 테스트가 끝나면 더미 Todo데이터를 제거합니다.
        storage.remove(TodoStoreService.storageName);
    });

    it('컴퍼넌트가 생성되었을 때 할 일 목록에 저장소에 있는 할 일들을 표시한다.', () => {
        // 할 일 목록에 있는 TodoListItemComponent를 모두 선택합니다.
        const todoItems = fixture.debugElement.queryAll(By.directive(TodoListItemComponent));

        // 뷰에 표시된 TodoListItem 들이 정확한 값을 입력 받았는지 확인합니다.
        todoItems.forEach((todoItem, index) => {
            const todo = todoDummies[index];
            const instance = todoItem.componentInstance as TodoListItemComponent;

            expect(instance.todo).toEqual(todo);
        });
    });

    it('할 일을 추가하면 할 일 목록에서 새로운 할 일이 생겨야 합니다.', () => {
        const addTodoInput = fixture.debugElement.query(By.css('input#add-todo-input'));

        // Input에 새로운 할 일의 제목을 입력합니다.
        addTodoInput.nativeElement.value = 'Some Todo Task';
        addTodoInput.triggerEventHandler('input', {
            target: addTodoInput.nativeElement
        });
        fixture.detectChanges();

        // 만들기 버튼을 클릭합니다.
        const addTodoButton = fixture.debugElement.query(By.css('button#add-todo-button'));
        (addTodoButton.nativeElement as HTMLButtonElement).click();
        fixture.detectChanges();

        // 할 일 목록에서 마지막 할 일은 방금 새로 생성한 할 일이어야 합니다.
        const todoItems = fixture.debugElement.queryAll(By.directive(TodoListItemComponent));
        const lastTodo = todoItems[todoItems.length - 1].componentInstance as TodoListItemComponent;
        expect(lastTodo.todo.body).toEqual('Some Todo Task');
    });

    it('할 일을 삭제하면 할 일 목록에서 해당 할 일이 제거됩니다.', () => {
        let todos = fixture.debugElement.queryAll(By.directive(TodoListItemComponent));
        const target = todos[1].componentInstance as TodoListItemComponent;

        // 삭제 버튼을 누릅니다.
        target.removeThis();
        fixture.detectChanges();

        // 할 일 목록에서 삭제한 할 일이 없습니다.
        todos = fixture.debugElement.queryAll(By.directive(TodoListItemComponent));

        expect(todos.length).toEqual(todoDummies.length - 1);
        expect((todos[1].componentInstance as TodoListItemComponent).todo.body).not.toContain(todoDummies[1].body);
    });

    it('완료됨 토클하면 할 일이 완료 상태로 표시된다.', () => {
        let todos = fixture.debugElement.queryAll(By.directive(TodoListItemComponent));
        const target = todos[1].componentInstance as TodoListItemComponent;

        // 체크박스를 토클합니다.
        target.toggleThis();
        fixture.detectChanges();

        // 두번째 Todo는 completed 값이 true이므로 토글하면 false가 되길 예측합니다.
        todos = fixture.debugElement.queryAll(By.directive(TodoListItemComponent));
        expect(todos[1].query(By.css('input')).nativeElement.checked).toBe(false);
    });
});
