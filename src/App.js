// React
import React from 'react';
import sanitizeHtml from "sanitize-html";
import { render } from '@testing-library/react';

// Мои компоненты
import EditorPanel from './components/editorPanel';
import ContentEditable from './components/contentEditable';
import HTMLeditable from './components/htmlEditable';
import Button from './components/button';

// Стили
import './App.css';
import './sprite.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    console.log('*** Начальные данные ***\n', this.state);

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    this.reset = this.reset.bind(this);
    this.sanitize = this.sanitize.bind(this);
  }

  // установить глобальные настройки
  setGlobalParam(e) {
    let inputName = e.target.name;
    let value = e.target.value;

    this.setState({ styles: { [inputName]: [value] } });
  }

  // сбросить изменения параметров текста
  reset() {
    this.setState({
      styles: {
        fontSize: this.props.data.styles.fontSize,
        lineHeight: this.props.data.styles.lineHeight,
      }
    });
  }

  // вкл/откл возможность редактировать текст
  switchEditText() {
    this.setState({
      states: {
        // заменить значение на противоположное
        editText: !this.state.states.editText
      }
    });

    // если режим редактирования выключен
    if (this.state.states.editText) {
      this.sanitize(); // записать новый текст, удалив неразрешённые теги
    }
  }

  // записать новый текст, удалив неразрешённые теги
  sanitize() {
    let editableBlock = document.querySelectorAll('.content'); // блок, текст в котором можно редактировать

    editableBlock.forEach(elem => {
      let text = (elem.tagName !== "CODE") ? elem.innerHTML : elem.innerText; // текст внутри блока

      // если текст изменился
      if (text !== this.state.html) {
        // записать новую версию текста, применив настройки (удалить пустые теги, заменить символы и пр.)
        this.setState({
          html: sanitizeHtml(text, this.state.sanitizeParam)
        });
      }
    });
  };

  render() {
    return (
      <main className="App">

        {/* панель редактирования */}
        <EditorPanel
          param={this.state}
          setGlobalParam={this.setGlobalParam}
          switchEditText={this.switchEditText}
          reset={this.reset}
        />

        {/* блок, ТЕКСТ в котором можно редактировать */}
        <ContentEditable
          param={this.state}
        // onBlur={this.sanitize} // (!) стили не всегда применяются
        />

        {/* блок, ТЕГИ в котором можно редактировать */}
        <HTMLeditable
          param={this.state}
        // onBlur={this.sanitize} // (!) стили не всегда применяются
        />

      </main>
    );
  };
};