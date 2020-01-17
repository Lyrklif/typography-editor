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
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
      'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'sub', 'sup', 'span', 'blockquote'
    ],
    // разрешённые атрибуты
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      '*': ['style']
    }
  },

  // команды для редактирования текста
  formatСommand: {
    clearFormat: [
      ['removeFormat', false, ''],
      ['unlink', false, ''],
    ],
    h1: [
      ['formatBlock', false, 'h1'],
    ],
    h2: [
      ['formatBlock', false, 'h2'],
    ],
    h3: [
      ['formatBlock', false, 'h3'],
    ],
    h4: [
      ['formatBlock', false, 'h4'],
    ],
    h5: [
      ['formatBlock', false, 'h5'],
    ],
    h6: [
      ['formatBlock', false, 'h6'],
    ],
    p: [
      ['formatBlock', false, 'p'],
    ],
    a: [
      ['createLink', false, '#'],
    ],
    ul: [
      ['insertUnorderedList', false, ''],
    ],
    ol: [
      ['insertOrderedList', false, ''],
    ],
    b: [
      ['bold', false, ''],
    ],
    i: [
      ['italic', false, ''],
    ],
    strike: [
      ['strikeThrough', false, ''],
    ],
    bgcolor: [
      ['styleWithCSS', false, 'true'], // использовать стили, а не html
      ['hiliteColor', false, 'rgba(255, 255, 0, 1)'],
      ['styleWithCSS', false, 'false'], // использовать html, а не стили
    ],
    color: [
      ['styleWithCSS', false, 'true'], // использовать стили, а не html
      ['foreColor', false, 'rgba(255, 0, 0, 1)'],
      ['styleWithCSS', false, 'false'], // использовать html, а не стили
    ],
    sup: [
      ['superscript', false, ''],
    ],
    sub: [
      ['subscript', false, ''],
    ],
    underline: [
      ['underline', false, ''],
    ],
    blockquote: [
      ['formatBlock', false, 'blockquote'],
    ],
  },

  // кнопки
  buttons: {
    edit: 'Режим редактирования текста',
    reset: 'Вернуть стандартные настройки'
  },

  // текст в редактируемом блоке
  html: '<h1>Редактируемый текст</h1><p>Текст и его стили можно изменять, нажав на кнопку <b>Режим редактирования текста</b>.</p><p>Очистить формат текста можно, нажав на <b>clearFormat</b>.</p>'

}

ReactDOM.render(<App data={data} />, document.getElementById('root'));

serviceWorker.unregister();
