import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { startingValue } from './startingValue';
import * as serviceWorker from './serviceWorker';

// Начальные значения
const data = startingValue;

ReactDOM.render(<App data={data} />, document.getElementById('root'));

serviceWorker.unregister();
