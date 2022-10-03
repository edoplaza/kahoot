import React from 'react';
import Provider from './store/Provider';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
