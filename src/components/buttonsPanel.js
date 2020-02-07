import React from "react";

import IconButton from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";

import { updLocalStorage } from '../functions/localStorage';
import { updStates } from '../actions/actionCreators';

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    editText: !!+state.states.editText,
    download: state.buttons.download,
    print: state.buttons.print,
    save: state.buttons.save,
    editParam: state.buttons.editParam,

    saveSuccess: state.text.saveSuccess,
    saveError: state.text.saveError,
  }
}


// настройка тегов
class ButtonsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenAlert: false,
      typeAlert: 'info',
      textAlert: 'Сообщение',
    };
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


  save = () => {
    updLocalStorage();

    setTimeout(() => {
      if (localStorage.getItem("param") !== null) {
        this.showAlert('success', this.props.saveSuccess);
      } else {
        this.showAlert('error', this.props.saveError);
      }
    }, 0);
  }

  showAlert = (type, text) => {
    this.setState(state => ({
      typeAlert: type,
      textAlert: text,
    }));

    this.switchShowAlert();
  }

  switchShowAlert = () => {
    this.setState(state => ({
      isOpenAlert: !this.state.isOpenAlert
    }));
  }

  editParam = () => {
    updStates('openSettingsTagsPanel');
  }


  // напечатать текст/код
  print = () => {
    window.print();
  }

  settings = () => {
    updStates('openSettingsPanel');
  }

  render() {
    const buttonsData = [
      ['settings', 'Settings'],
      ['editParam', 'Apps'],
      ['save', 'Save'],
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