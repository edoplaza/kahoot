import React, { createContext, useReducer } from 'react';
import Reducer, { initialState } from './Reducer';

const Context = createContext<any | null>(null);

interface IProps {
  children: JSX.Element;
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export { Context };

export default Provider;
