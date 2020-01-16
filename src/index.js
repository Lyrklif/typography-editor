import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Начальные значения
const data = {
  // стили текста
  styles: {
    fontSize: 16,
    lineHeight: 2.2,
  },

  // состояния элементов 
  states: {
    editText: false,
  },

  // параметры для sanitize-html
  sanitizeParam: {
    // разрешённые в редактируемом блоке теги
    allowedTags: [
      'clearFormat', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul',
      'ol', 'b', 'i', 'strike', 'span'
    ],
    // разрешённые атрибуты
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      '*': ['href', 'align', 'alt', 'center', 'bgcolor', 'style']
    }
  },

  // аргументы для редактирования текста
  sanitizeArguments: {
    h1: ['formatBlock', 'h1'],
    h2: ['formatBlock', 'h2'],
    h3: ['formatBlock', 'h3'],
    h4: ['formatBlock', 'h4'],
    h5: ['formatBlock', 'h5'],
    h6: ['formatBlock', 'h6'],
    p: ['formatBlock', 'p'],
    a: ['createLink', '#'],
    ul: ['insertUnorderedList', ''],
    ol: ['insertOrderedList', ''],
    b: ['bold', ''],
    i: ['italic', ''],
    strike: ['strikeThrough', ''],
    clearFormat: ['removeFormat', ''],
    span: ['hiliteColor', 'rgba(255, 255, 0, 1)'],
  },

  // кнопки
  buttons: {
    edit: 'Режим редактирования текста',
    reset: 'Вернуть стандартные настройки'
  },

  // текст в редактируемом блоке
  html: '<h1>Редактируемый текст</h1><p>Текст и его стили можно изменять, нажав на кнопку <b>Режим редактирования текста</b>.</p>Очистить формат текста можно, нажав на <b>clearFormat</b>.<p></p>'

}

ReactDOM.render(<App data={data} />, document.getElementById('root'));

serviceWorker.unregister();
