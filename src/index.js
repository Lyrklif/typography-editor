import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const data = {
  fontSize: 16,
  lineHeight: 2.2,

  editText: false,

  styles: {
    fontSize: 16,
    lineHeight: 2.2,
  },

  states: {
    editText: false,
  },

  tags: {
    p: 'p',
    b: 'b',
    i: 'i',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6'
  },

  sanitizeParam: {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
      'ol', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br'
    ],
    allowedAttributes: { a: [ 'href', 'name', 'target' ] }
  },

  buttons: {
    edit: 'Режим редактирования текста',
    reset: 'Вернуть стандартные настройки'
  },

  html: '<h1>Редактируемый текст</h1><p>Текст и его стили можно изменять, нажав на кнопку <b>Режим редактирования текста</b></p>'

}

ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
