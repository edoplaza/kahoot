import React, { useEffect, useContext } from 'react';
import { Context } from './store/Provider';
import { types } from './store/Reducer';
import { getData } from './api';
import Points from './components/points/Points';
import Items from './components/items/Items';
import Totals from './components/totals/Totals';

import './App.scss';

const App: React.FC = () => {
  const [store, dispatch] = useContext(Context);

  useEffect(() => {
    const getInitialData = async () => {
      const data = await getData();
      if (data) {
        dispatch({ type: types.setPoints, value: data });
      }
    };

    getInitialData();
  }, [dispatch]);
  return (
    <div className="App">
      <div className="App__container">
        <main className="App__main">
          <Points />
        </main>
        <aside className="App__aside">
          <Items />
          <Totals />
        </aside>
      </div>
    </div>
  );
};

export default App;
