import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  default_bgcolor,
  default_color,
} from './vars';

// Начальные значения
export const startingValue = {
  // стили
  styles: {
    fontSize: 16,
    lineHeight: 2.2,

    bgcolor: default_bgcolor,
    color: default_color,
  },

  // состояния элементов 
  states: {
    editText: true,
    colorPicker: false,

    paletteEdit: formatCommand_bgcolor, // какую панель цвета редактировать
  },

  // параметры для sanitize-html
  sanitizeParam: {
    // разрешённые в редактируемом блоке теги
    allowedTags: false, // разрешить все теги
    // allowedTags: [
    //   'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    //   'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'sub', 'sup', 'span'
    // ],
    // разрешённые атрибуты
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      '*': ['style', 'color', 'bgcolor', 'background-color']
    },
    parser: {
      lowerCaseTags: true
    },
    // заменить <x> на <y>
    transformTags: {
      'div': 'p',
      'br': '',
      'string': 'b',
      'em': 'i',
      'strike': 's',
    },
    // удалить пусте теги
    exclusiveFilter: function (frame) {
      return (
        !frame.text.trim()
      );
    },
  },

  /*
  * команды для редактирования текста
  * если key записан в виде [keyName],
  * то его название нужно менять в файле ./vars.js
  * [эти названия используются где-то ещё в коде]
  */
  formatCommand: {
    [formatCommand_clear]: [
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
    [formatCommand_link]: [
      ['createLink', false, '#'], // нельзя менять и добавлять новые команды
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
    [formatCommand_bgcolor]: [
      ['styleWithCSS', false, 'true'], // использовать стили, а не html
      ['hiliteColor', false, default_bgcolor],
      ['styleWithCSS', false, 'false'], // использовать html, а не стили
    ],
    [formatCommand_color]: [
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
    hr: [
      ['insertHorizontalRule', false, ''],
    ],
    left: [
      ['justifyLeft', false, ''],
    ],
    center: [
      ['justifyCenter', false, ''],
    ],
    right: [
      ['justifyRight', false, ''],
    ],
    full: [
      ['justifyFull', false, ''],
    ],
  },

  // кнопки
  buttons: {
    edit: 'Режим редактирования текста',
    reset: 'Вернуть стандартные настройки',
    undo: 'Отменить',
    redo: 'Повторить',
    download: 'Скачать текст с тегами',
  },

  // текст в редактируемом блоке
  html: `
  <p>v3</p>
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