import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { startingValue } from './startingValue';
import * as serviceWorker from './serviceWorker';

import mainStore from './store/mainStore';
import { Provider } from "react-redux";

// Начальные значения
const data = startingValue;

ReactDOM.render(
  <Provider store={mainStore}>
    <App data={data} />
  </Provider>,

  document.getElementById('root'));

serviceWorker.unregister();
