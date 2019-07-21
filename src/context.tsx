import React, { FC } from 'react';

import store, { StoreInterface } from './stores';

export interface ContextProps {
  value: StoreInterface;
  children: JSX.Element | JSX.Element[];
}

const StoreContext = React.createContext<StoreInterface>(store);

export const StoreProvider: FC<ContextProps> = (
  { value, children }: ContextProps,
): any => (
  <StoreContext.Provider value={value}>
    {children}
  </StoreContext.Provider>
);

export default StoreContext;
