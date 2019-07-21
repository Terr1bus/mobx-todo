import React, {
  ReactElement,
  ChangeEvent,
  KeyboardEvent,
  RefObject,
} from 'react';
import { observable } from 'mobx';

import styles from './Input.module.css';

import todosStore from '../../stores/TodosStore';

const { addTodo } = todosStore;

class Input extends React.PureComponent<{}, {}> {
  @observable private inputText: string = '';

  private inputRef: RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  private setInputText = (e: ChangeEvent<HTMLInputElement>): void => {
    this.inputText = e.target.value;
  }

  private onPressEnter = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      addTodo(this.inputText);
      if (this.inputRef.current) {
        this.inputRef.current.value = '';
      }
    }
  }

  public render(): ReactElement<HTMLDivElement> {
    return (
      <div className={styles['input-wrapper']}>
        <input
          type="text"
          ref={this.inputRef}
          defaultValue={this.inputText}
          onChange={this.setInputText}
          onKeyDown={this.onPressEnter}
          className={styles.input}
        />
      </div>
    );
  }
}

export default Input;
