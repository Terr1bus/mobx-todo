import todosStore, { TodosStore } from './TodosStore';

export default { todosStore };

export interface StoreInterface {
  todosStore: TodosStore;
}
