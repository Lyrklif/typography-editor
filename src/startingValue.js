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
    editText: true, // вкл/выкл режим редактирования текста
    colorPicker: false, // показать/скрыть панель выбора цвета
    dialogLink: false, // показать/скрыть панель ввода ссылки

    // какой параметр по-умолчанию изменяет панель выбора цвета
    paletteEdit: formatCommand_bgcolor,

    // какой таб будет активным изначально
    tabActive: 0
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
      'strong': 'b',
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
      materialize: {
        title: 'Очистить формат',
        iconName: 'FormatClear'
      }
    },
    h1: {
      command: [
        ['formatBlock', false, 'h1'],
      ],
      materialize: {
        title: 'h1',
        iconName: 'Filter1'
      }
    },
    h2: {
      command: [
        ['formatBlock', false, 'h2'],
      ],
      materialize: {
        title: 'h2',
        iconName: 'Filter2'
      }
    },
    h3: {
      command: [
        ['formatBlock', false, 'h3'],
      ],
      materialize: {
        title: 'h3',
        iconName: 'Filter3'
      }
    },
    h4: {
      command: [
        ['formatBlock', false, 'h4'],
      ],
      materialize: {
        title: 'h4',
        iconName: 'Filter4'
      }
    },
    h5: {
      command: [
        ['formatBlock', false, 'h5'],
      ],
      materialize: {
        title: 'h5',
        iconName: 'Filter5'
      }
    },
    h6: {
      command: [
        ['formatBlock', false, 'h6'],
      ],
      materialize: {
        title: 'h6',
        iconName: 'Filter6'
      }
    },
    // p: {
    //   command: [
    //     ['formatBlock', false, 'p'],
    //   ],
    //   materialize: {
    //     title: 'Параграф',
    //     iconName: 'TextFormat'
    //   }
    // },

    b: {
      command: [
        ['bold', false, ''],
      ],
      materialize: {
        title: 'bold',
        iconName: 'FormatBold'
      }
    },
    i: {
      command: [
        ['italic', false, ''],
      ],
      materialize: {
        title: 'italic',
        iconName: 'FormatItalic'
      }
    },
    underline: {
      command: [
        ['underline', false, ''],
      ],
      materialize: {
        title: 'underline',
        iconName: 'FormatUnderlined'
      }
    },
    strike: {
      command: [
        ['strikeThrough', false, ''],
      ],
      materialize: {
        title: 'strike',
        iconName: 'StrikethroughS'
      }
    },
    [formatCommand_bgcolor]: {
      command: [
        ['hiliteColor', false, default_bgcolor],
      ],
      materialize: {
        title: 'Цвет фона',
        iconName: 'FormatColorFill'
      }
    },
    [formatCommand_color]: {
      command: [
        ['styleWithCSS', false, 'true'], // использовать стили, а не html
        ['foreColor', false, '#ff0000'],
        ['styleWithCSS', false, 'false'], // использовать html, а не стили
      ],
      materialize: {
        title: 'Цвет текста',
        iconName: 'FormatColorText'
      }
    },
    left: {
      command: [
        ['justifyLeft', false, ''],
      ],
      materialize: {
        title: 'left',
        iconName: 'FormatAlignLeft'
      }
    },
    center: {
      command: [
        ['justifyCenter', false, ''],
      ],
      materialize: {
        title: 'center',
        iconName: 'FormatAlignCenter'
      }
    },
    right: {
      command: [
        ['justifyRight', false, ''],
      ],
      materialize: {
        title: 'right',
        iconName: 'FormatAlignRight'
      }
    },
    full: {
      command: [
        ['justifyFull', false, ''],
      ],
      materialize: {
        title: 'full',
        iconName: 'FormatAlignJustify'
      }
    },
    ul: {
      command: [
        ['insertUnorderedList', false, ''],
      ],
      materialize: {
        title: 'Маркированный список',
        iconName: 'FormatListNumbered'
      }
    },
    ol: {
      command: [
        ['insertOrderedList', false, ''],
      ],
      materialize: {
        title: 'Нумерованный список',
        iconName: 'FormatListBulleted'
      }
    },
    sup: {
      command: [
        ['superscript', false, ''],
      ],
      materialize: {
        title: 'sup',
        iconName: 'VerticalAlignTop'
      }
    },
    sub: {
      command: [
        ['subscript', false, ''],
      ],
      materialize: {
        title: 'sub',
        iconName: 'VerticalAlignBottom'
      }
    },
    blockquote: {
      command: [
        ['formatBlock', false, 'blockquote'],
      ],
      materialize: {
        title: 'Цитата',
        iconName: 'FormatQuote'
      }
    },
    hr: {
      command: [
        ['insertHorizontalRule', false, ''],
      ],
      materialize: {
        title: 'hr',
        iconName: 'Remove'
      }
    },
    [formatCommand_link]: {
      command: [
        ['createLink', false, '#'], // нельзя менять и добавлять новые команды
      ],
      materialize: {
        title: 'Ссылка',
        iconName: 'Link'
      }
    },
    indent: {
      command: [
        ['indent', false, ''],
      ],
      materialize: {
        title: 'Добавить отступ',
        iconName: 'FormatIndentIncrease'
      }
    },
    outdent: {
      command: [
        ['outdent', false, ''],
      ],
      materialize: {
        title: 'Убрать отступ',
        iconName: 'FormatIndentDecrease'
      }
    },

  },

  // текст кнопок
  buttons: {
    edit: 'Режим редактирования текста',
    reset: 'Вернуть стандартные настройки',
    undo: 'Отменить',
    redo: 'Повторить',
    download: 'Скачать текст с тегами',
    text: 'text',
    html: 'html',
    css: 'css',
  },

  // текст полей ввода
  inputs: {
    fontSize: 'Размер шрифта',
    lineHeight: 'Межстрочный интервал',
  },

  // текст в редактируемом блоке
  html: `
  <p>v3</p>
  <p><b>Редактируемый текст</b></p>
  <p>Текст и его стили можно изменять, нажав на кнопку <b>Режим редактирования текста</b>.</p>
  <p>Очистить формат текста можно, нажав на <b>clearFormat</b>.</p>
  <p>Аксиома <s>силлогизма</s>, по определению, представляет собой неоднозначный предмет деятельности.
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