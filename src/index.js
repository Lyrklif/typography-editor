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
    allowedTags: false, // разрешить все теги
    // allowedTags: [
    //   'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    //   'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'sub', 'sup', 'span', 'blockquote'
    // ],
    // разрешённые атрибуты
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      '*': ['style', 'color', 'bgcolor', 'background-color']
    }
  },

  // команды для редактирования текста
  formatСommand: {
    clearFormat: [
      ['removeFormat', false, ''],
      ['unlink', false, ''],
      ['formatBlock', false, 'p'],
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
      ['hiliteColor', false, 'ffff00'],
      ['styleWithCSS', false, 'false'], // использовать html, а не стили
    ],
    color: [
      ['styleWithCSS', false, 'true'], // использовать стили, а не html
      ['foreColor', false, '#ff0000'],
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
  html: `
  <p>v2</p>
  <p><b>Редактируемый текст</b></p>
  <p>Текст и его стили можно изменять, нажав на кнопку <b>Режим редактирования текста</b>.</p>
  <p>Очистить формат текста можно, нажав на <b>clearFormat</b>.</p>
  <p>Аксиома <strike>силлогизма</strike>, по определению, представляет собой неоднозначный предмет деятельности. 
  Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
  Созерцание <i>непредсказуемо</i>. Смысл жизни, следовательно, творит данный закон внешнего мира. 
  Апостериори, гравитационный парадокс <sup>амбивалентно</sup> понимает</p>
  <h2>Заголовок</h2>
  <p>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. 
  Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
  Созерцание непредсказуемо. <a href="#">Смысл жизни</a>, <b>следовательно</b>, творит данный закон внешнего мира. 
  Апостериори, гравитационный парадокс амбивалентно понимает</p>
  <ul>
  <li>Аксиома</li>
  <li>силлогизма</li>
  <li>по определению</li>
  </ul>
  <blockquote>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. 
  Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
  Созерцание непредсказуемо. Смысл жизни, следовательно, творит данный закон внешнего мира. 
  Апостериори, гравитационный парадокс амбивалентно понимает</blockquote>
  <p>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. 
  Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
  Созерцание непредсказуемо. <a href="#">Смысл жизни</a>, <b>следовательно</b>, творит данный закон внешнего мира. 
  Апостериори, гравитационный парадокс амбивалентно понимает</p>
`
}

ReactDOM.render(<App data={data} />, document.getElementById('root'));

serviceWorker.unregister();
