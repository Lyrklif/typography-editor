import React from "react";

import Button from "./button";
import IconButton from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
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

  render() {
    return (
      <Grid container spacing={0} alignItems="center" justify="center">

        <Grid item>
          {/* КНОПКА Отменить */}
          <IconButton
            color="primary"
            aria-label={this.props.param.buttons.undo}
            title={this.props.param.buttons.undo}
            onClick={this.undo}
          >
            <IconsLib.Undo />
          </IconButton>
        </Grid>


        <Grid item>
          {/* КНОПКА Повторить */}
          <IconButton
            color="primary"
            aria-label={this.props.param.buttons.redo}
            title={this.props.param.buttons.redo}
            onClick={this.redo}
          >
            <IconsLib.Redo />
          </IconButton>
        </Grid>


        <Grid item>
          {/* КНОПКА скачать */}
          <IconButton
            color="primary"
            aria-label={this.props.param.buttons.download}
            title={this.props.param.buttons.download}
            onClick={this.download}
          >
            <IconsLib.GetApp />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}
