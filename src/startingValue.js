import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  formatCommand_uppercase,
  formatCommand_lowercase,
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

    tabActive: 0,// какой таб будет активным изначально

    switchOpenSettings: false, // показывать скрытые иконки SpeedDial

    openSettingsTagsPanel: false, // показывать панель настроект тегов
    openSettingsPanel: false, // показывать панель с основными настройками
  },

  // размеры, которые можно задавать в select
  sizes: {
    fontSize: {
      values: [
        8,
        9,
        10,
        11,
        12,
        14,
        15,
        16,
        17,
        18,
        20,
        24,
        30,
        36,
        48,
      ]
    },

    lineHeight: {
      values: [
        1.0,
        1.2,
        1.4,
        1.5,
        1.6,
        1.8,
        2.0,
        2.2,
        2.4,
        2.5,
        2.6,
        2.8,
        3.0,
        3.5,
        4.0,
      ]
    },
  },

  // параметры для sanitize-html
  sanitizeParam: {
    // allowedTags: false, // разрешить все теги
    // разрешённые теги
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
      'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'sub', 'sup', 'span',
      's', 'div', 'font'
    ],
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
      'strong': 'b',
      'em': 'i',
      'strike': 's',
      'font': 'span',
    },
    // удалить пусте теги
    // exclusiveFilter: function (frame) {
    //   return (
    //     !frame.text.trim()
    //   );
    // },
  },

  /*
  * команды для редактирования текста
  * если key записан в виде [keyName],
  * то его название нужно менять в файле ./vars.js
  * [эти названия используются где-то ещё в коде]
  */
  tagParameters: {

    // ******************************
    outside: {
      [formatCommand_clear]: {
        materialize: {
          title: 'Очистить формат',
          iconName: 'FormatClear'
        },
        selected: true,
      },
      undo: {
        command: ['undo', false, ''],
        materialize: {
          title: 'Отменить',
          iconName: 'Undo'
        },
        selected: false,
      },
      redo: {
        command: ['redo', false, ''],
        materialize: {
          title: 'Повторить',
          iconName: 'Redo'
        },
        selected: false,
      },
      p: {
        command: ['formatBlock', false, 'p'],
        materialize: {
          title: 'Параграф',
          iconName: 'TextFormat'
        },
        selected: true,
      },
    },


    // ******************************
    titles: {
      h1: {
        command: ['formatBlock', false, 'h1'],
        materialize: {
          title: 'Заголовок 1',
          iconName: 'Filter1'
        },
        selected: true,
      },
      h2: {
        command: ['formatBlock', false, 'h2'],
        materialize: {
          title: 'Заголовок 2',
          iconName: 'Filter2'
        },
        selected: true,
      },
      h3: {
        command: ['formatBlock', false, 'h3'],
        materialize: {
          title: 'Заголовок 3',
          iconName: 'Filter3'
        },
        selected: true,
      },
      h4: {
        command: ['formatBlock', false, 'h4'],
        materialize: {
          title: 'Заголовок 4',
          iconName: 'Filter4'
        },
        selected: true,
      },
      h5: {
        command: ['formatBlock', false, 'h5'],
        materialize: {
          title: 'Заголовок 5',
          iconName: 'Filter5'
        },
        selected: true,
      },
      h6: {
        command: ['formatBlock', false, 'h6'],
        materialize: {
          title: 'Заголовок 6',
          iconName: 'Filter6'
        },
        selected: true,
      },
    },




    // ******************************
    textStyle: {
      b: {
        command: ['bold', false, ''],
        materialize: {
          title: 'Полужирный',
          iconName: 'FormatBold'
        },
        selected: true,
      },
      i: {
        command: ['italic', false, ''],
        materialize: {
          title: 'Курсив',
          iconName: 'FormatItalic'
        },
        selected: true,
      },
      underline: {
        command: ['underline', false, ''],
        materialize: {
          title: 'Подчёркнутый текст',
          iconName: 'FormatUnderlined'
        },
        selected: true,
      },
      strike: {
        command: ['strikeThrough', false, ''],
        materialize: {
          title: 'Зачёркнутый текст',
          iconName: 'StrikethroughS'
        },
        selected: true,
      },
      [formatCommand_bgcolor]: {
        materialize: {
          title: 'Цвет фона',
          iconName: 'FormatColorFill'
        },
        selected: true,
      },
      [formatCommand_color]: {
        materialize: {
          title: 'Цвет текста',
          iconName: 'FormatColorText'
        },
        selected: true,
      },
    },

    // ******************************
    textPositioning: {
      left: {
        command: ['justifyLeft', false, ''],
        materialize: {
          title: 'По левому краю',
          iconName: 'FormatAlignLeft'
        },
        selected: true,
      },
      center: {
        command: ['justifyCenter', false, ''],
        materialize: {
          title: 'По центру',
          iconName: 'FormatAlignCenter'
        },
        selected: true,
      },
      right: {
        command: ['justifyRight', false, ''],
        materialize: {
          title: 'По правому краю',
          iconName: 'FormatAlignRight'
        },
        selected: true,
      },
      full: {
        command: ['justifyFull', false, ''],
        materialize: {
          title: 'По ширине',
          iconName: 'FormatAlignJustify'
        },
        selected: true,
      },
    },

    // ******************************
    textIndents: {
      ul: {
        command: ['insertUnorderedList', false, ''],
        materialize: {
          title: 'Маркированный список',
          iconName: 'FormatListBulleted'
        },
        selected: true,
      },
      ol: {
        command: ['insertOrderedList', false, ''],
        materialize: {
          title: 'Нумерованный список',
          iconName: 'FormatListNumbered'
        },
        selected: true,
      },
      indent: {
        command: ['indent', false, ''],
        materialize: {
          title: 'Добавить отступ',
          iconName: 'FormatIndentIncrease'
        },
        selected: true,
      },
      outdent: {
        command: ['outdent', false, ''],
        materialize: {
          title: 'Убрать отступ',
          iconName: 'FormatIndentDecrease'
        },
        selected: true,
      },
      blockquote: {
        command: ['formatBlock', false, 'blockquote'],
        materialize: {
          title: 'Цитата',
          iconName: 'FormatQuote'
        },
        selected: true,
      },
    },

    // ******************************
    adding: {
      hr: {
        command: ['insertHorizontalRule', false, ''],
        materialize: {
          title: 'Горизонтальная черта',
          iconName: 'Remove'
        },
        selected: true,
      },
      [formatCommand_link]: {
        materialize: {
          title: 'Ссылка',
          iconName: 'Link'
        },
        selected: true,
      },
    },

    // ******************************
    register: {
      sup: {
        command: ['superscript', false, ''],
        materialize: {
          title: 'Надстрочный',
          iconName: 'VerticalAlignTop'
        },
        selected: true,
      },
      sub: {
        command: ['subscript', false, ''],
        materialize: {
          title: 'Подстрочный',
          iconName: 'VerticalAlignBottom'
        },
        selected: true,
      },
      [formatCommand_uppercase]: {
        materialize: {
          title: 'ВЕРХНИЙ РЕГИСТР',
          iconName: 'TextRotateUp'
        },
        selected: true,
      },
      [formatCommand_lowercase]: {
        materialize: {
          title: 'нижний регистр',
          iconName: 'TextRotateVertical'
        },
        selected: true,
      },
    },
  },

  // просто текст
  text: {
    settingsTagsPanelTitle: 'Отображаемые на панели иконки',
    settingsPanelTitle: 'Настройки',
    saveSuccess: 'Изменения сохранены',
    saveError: 'Произошла ошибка! Изменения не сохранены. Попробуйте ещё раз',
    tabText_Title: 'Редактируемый текст',
    tabHTML_Title: 'Редактируемый html',
  },


  // текст кнопок
  buttons: {
    edit: 'Режим редактирования текста',
    reset: 'Вернуть стандартные настройки',
    undo: 'Отменить',
    redo: 'Повторить',
    download: 'Скачать текст с тегами',
    print: 'Напечатать текст',
    text: 'text',
    html: 'html',
    css: 'css',
    close: 'Закрыть',
    send: 'Отправить',
    cancel: 'Отменить',
    save: 'Сохранить',
    apply: 'Применить',
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
    Апостериори, гравитационный парадокс <sup>амбивалентно</sup> понимает
  </p>
  <h2>Заголовок</h2>
  <p>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. 
    Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
    Созерцание непредсказуемо. <a href="#">Смысл жизни</a>, <b>следовательно</b>, творит данный закон внешнего мира. 
    Апостериори, гравитационный парадокс амбивалентно понимает
  </p>
  <ul>
    <li>Аксиома</li>
    <li>силлогизма</li>
    <li>по определению</li>
  </ul>
  <blockquote>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. 
    Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
    Созерцание непредсказуемо. Смысл жизни, следовательно, творит данный закон внешнего мира. 
    Апостериори, гравитационный парадокс амбивалентно понимает
  </blockquote>
  <p>Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. 
    Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. 
    Созерцание непредсказуемо. <a href="#">Смысл жизни</a>, <b>следовательно</b>, творит данный закон внешнего мира. 
    Апостериори, гравитационный парадокс амбивалентно понимает
  </p>
  `
}