import React, { ReactElement, FC } from 'react';

import { StoreProvider } from './context';
import store from './stores';

import Input from './components/Input';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

import './App.css';

const App: FC = (): ReactElement<HTMLDivElement> => (
  <div className="App">
    <StoreProvider value={store}>
      <Input />
      <TodoList />
      <Filters />
    </StoreProvider>
  </div>
);

export default App;
