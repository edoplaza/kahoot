import React from 'react';
import Points from './components/points/Points';
import Items from './components/items/Items';
import Totals from './components/totals/Totals';

import './App.scss';

function App() {
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
}

export default App;
