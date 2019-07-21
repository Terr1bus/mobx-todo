import React, { ReactElement, FC, KeyboardEvent } from 'react';
import cn from 'classnames';

import todoStore, { Todo } from '../../stores/TodosStore';

import styles from './TodoListItem.module.css';

interface Props extends Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

const { toggleTodo } = todoStore;

const TodoItem: FC<Props> = ({
  id,
  title,
  completed,
}: Props): ReactElement<HTMLLIElement> => {
  const onSpacePress = (event: KeyboardEvent<HTMLLIElement>): void => {
    event.preventDefault();
    if (event.keyCode === 32) {
      toggleTodo(id);
    }
  };

  return (
    <li
      onClick={(): void => toggleTodo(id)}
      onKeyDown={onSpacePress}
      role="menuitem"
      tabIndex={0}
      className={cn(
        styles['todo-item'],
        { [styles['todo-item_completed']]: completed },
      )}
    >
      <span
        className={cn(
          styles['todo-item__title'],
          { [styles['todo-item__title_completed']]: completed },
        )}
      >
        {title}
      </span>
    </li>
  );
};

export default TodoItem;
