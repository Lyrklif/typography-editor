import React from "react";

import IconButton from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";


import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles } from '../actions/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    editText: !!+state.states.editText,
    undo: state.buttons.undo,
    redo: state.buttons.redo,
    download: state.buttons.download,
    print: state.buttons.print,
  }
}


// настройка тегов
class ButtonsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  // скачать отредактированный текст
  download = () => {
    // если режим редактирования выключен
    if (!this.props.editText) {
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
  undo = () => {
    document.execCommand("undo"); // Отмена последнего действия
  }

  // сбросить изменения  параметров
  redo = () => {
    document.execCommand("redo"); // Повтор последнего действия
  }

  // напечатать текст/код
  print = () => {
    window.print();
  }

  render() {
    const buttonsData = [
      ['undo', 'Undo'],
      ['redo', 'Redo'],
      ['download', 'GetApp'],
      ['print', 'Print'],
    ];

    const buttons = buttonsData.map((elem, index) => {
      let Icon = IconsLib[elem[1]];

      return (
        <IconButton
          key={index}
          color="primary"
          aria-label={this.props[elem[0]]}
          title={this.props[elem[0]]}
          onClick={this[elem[0]]}
        >
          <Icon />
        </IconButton>
      );
    });


    return (
      <Box className="box-margin">
        {buttons}
      </Box>
    );
  }
}


export default connect(mapStateToProps)(ButtonsPanel);