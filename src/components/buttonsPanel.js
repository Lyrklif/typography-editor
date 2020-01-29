import React from "react";

import IconButton from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";

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
    this.print = this.print.bind(this);
  }

  // скачать отредактированный текст
  download() {
    // если режим редактирования выключен
    if (!this.props.param.states.editText) {
      let editableBlock = document.querySelector(".content"); // блок, текст в котором можно редактировать
      let block = editableBlock.outerHTML; // текст внутри блока

      let link = document.createElement("a"); // сгенерировать ссылку
      let file = new Blob([block], { type: "txt" }); // сгенерировать файл
      link.href = URL.createObjectURL(file); // сгенерировать href
      link.download = "text.txt"; // название и расширение файла
      link.click(); // имитировать нажатие на ссылку

      // если режим редактирования НЕ выключен
    } else {
      alert(
        "Перед скачиванием нужно выйти из режима редактирования.\nИначе параметры редактирования не будут применены к тексту"
      );
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

  // напечатать текст/код
  print() {
    window.print();
  }

  render() {
    return (
      <Box className="box-margin">
        {/* КНОПКА Отменить */}
        <IconButton
          color="primary"
          aria-label={this.props.param.buttons.undo}
          title={this.props.param.buttons.undo}
          onClick={this.undo}
        >
          <IconsLib.Undo />
        </IconButton>


        {/* КНОПКА Повторить */}
        <IconButton
          color="primary"
          aria-label={this.props.param.buttons.redo}
          title={this.props.param.buttons.redo}
          onClick={this.redo}
        >
          <IconsLib.Redo />
        </IconButton>


        {/* КНОПКА скачать */}
        <IconButton
          color="primary"
          aria-label={this.props.param.buttons.download}
          title={this.props.param.buttons.download}
          onClick={this.download}
        >
          <IconsLib.GetApp />
        </IconButton>



        {/* КНОПКА печать */}
        <IconButton
          color="primary"
          aria-label={this.props.param.buttons.print}
          title={this.props.param.buttons.print}
          onClick={this.print}
        >
          <IconsLib.Print />
        </IconButton>
      </Box>
    );
  }
}
