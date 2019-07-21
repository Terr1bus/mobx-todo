import React, { FC, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { Todo } from '../../stores/TodosStore';
import StoreContext from '../../context';

import TodoListItem from '../TodoListItem';
import { StoreInterface } from '../../stores';

import styles from './TodoList.module.css';

const TodoList: FC = (): ReactElement<HTMLDivElement> => {
  const { todosStore: { todosByFilter } } = React.useContext<StoreInterface>(StoreContext);
  return (
    <ol className={styles['todo-list']}>
      {todosByFilter.map(({ id, title, completed }: Todo): ReactElement<HTMLDivElement> => (
        <TodoListItem
          key={id}
          id={id}
          title={title}
          completed={completed}
        />
      ))}
    </ol>
  );
};

export default observer(TodoList);
