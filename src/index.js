import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppHook } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppHook />
    </Provider>
  </React.StrictMode>
);
