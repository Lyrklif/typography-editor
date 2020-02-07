// ColorPanel

import React from "react";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import { updStates } from '../actions/actionCreators';
import { connect } from 'react-redux';



import {
  formatCommand_bgcolor,
  formatCommand_color,
} from "../vars";



const mapStateToProps = (state) => {
  return {
    bgcolor: state.styles.bgcolor,
    color: state.styles.color,
    bgColorTitle: state.buttons.bgColor,
    textColorTitle: state.buttons.textColor,
  }
}


// настройка тегов
class ColorPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  // вкл/откл возможность редактировать текст
  switchEditText = () => {
    updStates('editText');
  }

  // при открытии панели выбора цвета, нажатием на палитру
  changeColor(param) {
    updStates('paletteEdit', param); // изменить палитру, которую сейчас редактируем
    updStates('colorPicker'); // показать modal выбора цвета
  }

  render() {
    const buttonsData = [
      [this.props.bgColorTitle, 'FormatColorFill', this.props.bgcolor, formatCommand_bgcolor],
      [this.props.textColorTitle, 'FormatColorText', this.props.color, formatCommand_color],
    ];

    const buttons = buttonsData.map((elem, index) => {
      let Icon = IconsLib[elem[1]];

      return (
        <Button
          key={index}
          size="large"
          color="primary"
          title={elem[0]}
          onClick={() => this.changeColor(elem[3])}
          startIcon={<Icon />}
        >
          <span
            className={"button-pallet__color"}
            style={{ backgroundColor: [elem[2]] }}>
          </span>
        </Button>
      );
    });

    return (
      <Box className={this.props.className ? `flex-block ${this.props.className}` : "flex-block"} >
        {buttons}
      </Box>
    );
  }
}


export default connect(mapStateToProps)(ColorPanel);