// React
import React from 'react';
import sanitizeHtml from "sanitize-html";
import { render } from '@testing-library/react';

// Мои компоненты
import EditorPanel from './components/editorPanel';
import ContentEditable from './components/contentEditable';
import Button from './components/button';

// Стили
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    console.log('*** Начальные данные ***\n', this.state);

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.reset = this.reset.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  // установить глобальные настройки
  setGlobalParam(value, inputName) {
    this.setState({ styles: { [inputName]: [value] } });
  }

  //  очистить формат, удалив родительский тег
  clearFormat = () => {
    let container = null; // блок, с которым работаем
    // если выделен (для IE)
    if (document.selection) {
      // записать выделенный текст
      container = document.selection.createRange().parentElement();
    }
    // если выделен
    else {
      // диапазон текста, который пользователь выделил на странице
      let select = window.getSelection();

      // если количество диапазонов в выделении > 0
      if (select.rangeCount > 0)
        // записать выделенный текст
        container = select.getRangeAt(0).startContainer.parentNode;
    }

    // если этот элемент не div и не li
    // *** пояснение:
    // * [div] -> чтобы нельзя было удалить сам блок .content при выделении всего содержимого
    // * [li] -> чтобы нельзя было убирать формат списков (слишком много багов из-за этого) 
    if (container.nodeName !== 'DIV' && container.nodeName !== 'LI') {
      container.outerHTML = container.innerHTML; // удалить родительский тег
    }
  }

  // установить тег (форматирование текста)
  setTag(e) {
    e.preventDefault();

    let tag = e.target.name;
    let commands = this.state.formatСommand[tag];

    // если команда для этого тега существует
    if (commands) {
      // применить все заданные команды из массива
      for (let i = 0; i < commands.length; i++) {
        // *** document.execCommand('Название команды', false, значение (если требуется));
        document.execCommand(commands[i][0], commands[i][1], commands[i][2].toUpperCase());
      }

      // если нужно очистить формат
      if (tag === 'clearFormat') {
        this.clearFormat();
      }

      // если команда для этого тега НЕ существует
    } else {
      console.log('Правила форматирования для этого тега не прописаны.\nСделайте это в файле startingValue.js');
    }
  }

  // сбросить изменения  параметров
  reset() {
    // this.setState(this.props.data); // вернуть ВСЕ начальные значения

    this.setState({
      styles: {
        fontSize: this.props.data.styles.fontSize,
        lineHeight: this.props.data.styles.lineHeight,
      }
    });
  }

  // сбросить изменения  параметров
  undo = () => {
    document.execCommand("undo", false, null); // Отмена последнего действия 
  }

  // сбросить изменения  параметров
  redo = () => {
    document.execCommand("redo", false, null); // Повтор последнего действия 
  }

  // скачать отредактированный текст
  download = () => {
    // если режим редактирования выключен
    if (!this.state.states.editText) {
      let editableBlock = document.querySelector('.content'); // блок, текст в котором можно редактировать
      let block = editableBlock.outerHTML; // текст внутри блока

      let link = document.createElement("a"); // сгенерировать ссылку
      let file = new Blob([block], { type: 'txt' }); // сгенерировать файл
      link.href = URL.createObjectURL(file); // сгенерировать href
      link.download = "text.txt"; // название и расширение файла
      link.click(); // имитировать нажатие на ссылку

      // если режим редактирования НЕ выключен
    } else {
      alert('Перед скачиванием нужно выйти из режима редактирования.\nИначе параметры редактирования не будут применены к тексту');
    }
  }

  // включить/отключить возможность редактировать текст
  switchEditText() {
    // заменить значение на противоположное
    this.setState({
      states: {
        editText: !this.state.states.editText
      }
    });

    // если редим редактирования выключен
    if (this.state.states.editText) {
      this.sanitize(); // записать новый текст, удалив неразрешённые теги
    }
  }

  // записать новый текст, удалив неразрешённые теги
  sanitize = () => {
    let editableBlock = document.querySelector('.content'); // блок, текст в котором можно редактировать
    let text = editableBlock.innerHTML; // текст внутри блока

    // если содержимое изменилось
    if (text !== this.state.html) {
      // записать новую версию текста, применив настройки (удалить пустые теги, заменить символы и пр.)
      this.setState({
        html: sanitizeHtml(editableBlock.innerHTML, this.state.sanitizeParam)
      });
    }
  };

  render() {

    return (
      <main className="App">

        {/* панель редактирования */}
        <EditorPanel
          param={this.state}
          setGlobalParam={this.setGlobalParam}
          reset={this.reset}
          switchEditText={this.switchEditText}
          setTag={this.setTag}
          undo={this.undo}
          redo={this.redo}
          download={this.download}
        />

        {/* блок, текст в котором можно редактировать */}
        <ContentEditable
          param={this.state}
        />

      </main>
    );
  };
};