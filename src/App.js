import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


import EditorPanel from './components/editorPanel';
import ContentEditable from './components/contentEditable';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.data;

    this.setGlobalParam = this.setGlobalParam.bind(this);
    this.reset = this.reset.bind(this);
    this.switchEditText = this.switchEditText.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  // установить глобальные настройки
  setGlobalParam(value, inputName) {
    this.setState({ [inputName]: [value] });
  }

  // установить тег
  setTag() {
    console.log('установить тег (надо прописать логику)');
  }

  // сбросить изменения
  reset() {
    this.setState(this.props.data);
  }


  // включить/отключить возможность редактировать текст
  switchEditText() {
    // заменить значение на противоположное
    this.setState({
      editText: !this.state.editText
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
        <ContentEditable param={this.state} />

      </main>
    );
  };
};