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
  tagParameters: {
    [formatCommand_clear]: {
      command: [
        ['removeFormat', false, ''],
        ['unlink', false, ''],
      ],
      display: ['icon-format_clear']
    },
    h1: {
      command: [
        ['formatBlock', false, 'h1'],
      ],
      display: ['icon-title_1']
    },
    h2: {
      command: [
        ['formatBlock', false, 'h2'],
      ],
      display: ['icon-title_2']
    },
    h3: {
      command: [
        ['formatBlock', false, 'h3'],
      ],
      display: ['icon-title_3']
    },
    // h4: {
    //   command: [
    //     ['formatBlock', false, 'h4'],
    //   ],
    //   display: ['icon-save']
    // },
    // h5: {
    //   command: [
    //     ['formatBlock', false, 'h5'],
    //   ],
    //   display: ['icon-save']
    // },
    // h6: {
    //   command: [
    //     ['formatBlock', false, 'h6'],
    //   ],
    //   display: ['icon-save']
    // },
    p: {
      command: [
        ['formatBlock', false, 'p'],
      ],
      display: ['icon-text']
    },
    [formatCommand_link]: {
      command: [
        ['createLink', false, '#'], // нельзя менять и добавлять новые команды
      ],
      display: ['icon-insert_link']
    },
    ul: {
      command: [
        ['insertUnorderedList', false, ''],
      ],
      display: ['icon-format_list_bulleted']
    },
    ol: {
      command: [
        ['insertOrderedList', false, ''],
      ],
      display: ['icon-format_list_numbered']
    },
    b: {
      command: [
        ['bold', false, ''],
      ],
      display: ['icon-format_bold']
    },
    i: {
      command: [
        ['italic', false, ''],
      ],
      display: ['icon-format']
    },
    strike: {
      command: [
        ['strikeThrough', false, ''],
      ],
      display: ['icon-strikethrough']
    },
    [formatCommand_bgcolor]: {
      command: [
        ['hiliteColor', false, default_bgcolor],
      ],
      display: ['icon-format_paint']
    },
    [formatCommand_color]: {
      command: [
        ['styleWithCSS', false, 'true'], // использовать стили, а не html
        ['foreColor', false, '#ff0000'],
        ['styleWithCSS', false, 'false'], // использовать html, а не стили
      ],
      display: ['icon-color_lens']
    },
    sup: {
      command: [
        ['superscript', false, ''],
      ],
      display: ['icon-superscript']
    },
    sub: {
      command: [
        ['subscript', false, ''],
      ],
      display: ['icon-subscript']
    },
    underline: {
      command: [
        ['underline', false, ''],
      ],
      display: ['icon-format_underlined']
    },
    blockquote: {
      command: [
        ['formatBlock', false, 'blockquote'],
      ],
      display: ['icon-format_quote']
    },
    hr: {
      command: [
        ['insertHorizontalRule', false, ''],
      ],
      display: ['icon-line_horizontal']
    },
    left: {
      command: [
        ['justifyLeft', false, ''],
      ],
      display: ['icon-format_align_left']
    },
    center: {
      command: [
        ['justifyCenter', false, ''],
      ],
      display: ['icon-format_align_center']
    },
    right: {
      command: [
        ['justifyRight', false, ''],
      ],
      display: ['icon-format_align_right']
    },
    full: {
      command: [
        ['justifyFull', false, ''],
      ],
      display: ['icon-format_align_justify']
    },
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