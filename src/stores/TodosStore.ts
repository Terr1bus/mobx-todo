import { computed, observable, action } from 'mobx';

export type Filter = 'ALL' | 'COMPLETED' | 'NOT_COMPLETED';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosStore {
  currentFilter: Filter;
  todosByFilter: Todo[];
  setFilter(value: Filter): void;
  addTodo(title: string): void;
  toggleTodo(todoId: number): void;
}

const initialTodos: Todo[] = [
  { id: 0, title: 'Create todo app', completed: false },
];

export const allFilters: Filter[] = ['ALL', 'COMPLETED', 'NOT_COMPLETED'];

class TodosStoreClass implements TodosStore {
  @observable private todos: Todo[];

  @observable private filter: Filter = 'ALL'

  public constructor(todos: Todo[] = []) {
    this.todos = todos;
  }

  public get currentFilter(): Filter {
    return this.filter;
  }

  public setFilter = (value: Filter): void => {
    this.filter = value;
  }

  @action public addTodo = (title: string): void => {
    const maxId = Math.max(...this.todos.map(({ id }: Todo): number => id));
    this.todos = [...this.todos, { id: maxId + 1, title, completed: false }];
  }

  public toggleTodo = (todoId: number): void => {
    const todo = this.todos.find(({ id }: Todo): boolean => id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  @computed public get todosByFilter(): Todo[] {
    switch (this.filter) {
      case 'NOT_COMPLETED': {
        return this.todos.filter(({ completed }: Todo): boolean => !completed);
      }
      case 'COMPLETED': {
        return this.todos.filter(({ completed }: Todo): boolean => completed);
      }
      default:
        return this.todos;
    }
  }
}

export default new TodosStoreClass(initialTodos);
