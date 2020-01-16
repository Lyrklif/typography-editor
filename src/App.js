// React
import React from 'react';
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import { render } from '@testing-library/react';

// Мои компоненты
import EditorPanel from './components/editorPanel';
// import ContentEditable from './components/contentEditable';

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

  // установить тег
  setTag() {
    console.log('setTag');
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

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.props.data.sanitizeParam) });
  };


  // включить/отключить возможность редактировать текст
  switchEditText() {
    // заменить значение на противоположное
    this.setState({
      editText: !this.state.editText
    });
  }

  // записать новый текст
  setNewText = (e) => {
    this.setState({
      html: e.target.value
    });
  }


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
        />

        {/* блок, текст в котором можно редактировать */}
        <ContentEditable
          className={this.state.editText ? 'editable content edit' : 'editable content'}
          style={
            {
              fontSize: `${this.state.styles.fontSize}px`,
              lineHeight: `${this.state.styles.lineHeight}em`
            }
          }
          tagName="div" // установить тег для элемента
          html={this.state.html} // записать новое значение блока
          disabled={!this.state.editText} // вкл/выкл возможность редактировать текст
          onChange={(e) => this.setNewText(e)} // событие при изменении текста
          onBlur={this.sanitize} // при потере фокуса ...
        />

      </main>
    );
  };
};