import React from 'react';


import Button from './button';

// настройка тегов
export default class ButtonsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.reset = props.reset;
    // this.switchEditText = props.switchEditText;


    this.download = this.download.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
  }

  // скачать отредактированный текст
  download() {
    // если режим редактирования выключен
    if (!this.props.param.states.editText) {
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

  // сбросить изменения  параметров
  undo() {
    document.execCommand("undo"); // Отмена последнего действия 
  }

  // сбросить изменения  параметров
  redo() {
    document.execCommand("redo"); // Повтор последнего действия 
  }

  render() {
    return (
      <div className={this.props.classes}>

        {/* КНОПКА Режим редактирования текста */}
        {/* <Button
          param={this.props.param}
          on_off='true'
          on_off_status={this.props.param.states.editText}
          clickEvent={this.switchEditText}
          text={this.props.param.buttons.edit}
          icon='icon-edit'
        /> */}

        {/* КНОПКА Отменить */}
        <Button
          param={this.props.param}
          clickEvent={this.undo}
          text={this.props.param.buttons.undo}
          icon='icon-undo'
        />

        {/* КНОПКА Повторить */}
        <Button
          param={this.props.param}
          clickEvent={this.redo}
          text={this.props.param.buttons.redo}
          icon='icon-redo'
        />

        {/* КНОПКА скачать */}
        <Button
          param={this.props.param}
          clickEvent={this.download}
          text={this.props.param.buttons.download}
          icon='icon-save'
        />

      </div>
    )
  }
}