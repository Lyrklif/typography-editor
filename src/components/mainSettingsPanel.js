import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles } from '../actions/actionCreators';
import { connect } from 'react-redux';

import sanitize from '../functions/sanitize';

import { getSelection } from '../functions/getSelection';
import { setAttributeForSelectedText } from '../functions/setAttributeForSelectedText';

const mapStateToProps = (state) => {
  return {
    editText: !!+state.states.editText,
    lineHeight: +state.styles.lineHeight,
    fontSize: +state.styles.fontSize,

    editTitle: state.buttons.edit,
    fontSizeTitle: state.inputs.fontSize,
    lineHeightTitle: state.inputs.lineHeight,

    fontSizeArray: state.sizes.fontSize.values,
    lineHeightArray: state.sizes.lineHeight.values,
  }
}


// настройка тегов
class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  // вкл/откл возможность редактировать текст
  switchEditText = () => {
    updStates('editText');

    // если режим редактирования выключен
    if (this.props.editText) {
      sanitize(); // записать новый текст, удалив неразрешённые теги
    }
  }

  // установить параметры текста
  eventHandler = (inputName, e) => {
    let value = e.target.value;
    let isSelected = getSelection().toString();

    // если есть выделенный текст и изменяется fontSize
    if (isSelected && inputName === 'fontSize') {
      setAttributeForSelectedText(7, 'font-size', `${value}px`); // установить размер выделенного текста

      // если текст не выделен изменить глобальные параметры
    } else {
      updStyles(inputName, value);
    }
  }

  render() {
    let fontSizeList = this.props.fontSizeArray.map((elem, index) => {
      return (
        <MenuItem key={index} value={elem}>{elem}</MenuItem>
      );
    });

    let lineHeightList = this.props.lineHeightArray.map((elem, index) => {
      return (
        <MenuItem key={index} value={elem}>{elem}</MenuItem>
      );
    });


    const inputsData = [
      ['fontSize', 'fontSizeTitle', fontSizeList],
      ['lineHeight', 'lineHeightTitle', lineHeightList],
    ];

    const inputs = inputsData.map((elem, index) => {
      return (
        <FormControl key={index}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            onChange={value => this.eventHandler(elem[0], value)}
            value={this.props[elem[0]]}
            title={this.props[elem[1]]}
          >
            {elem[2]}
          </Select>
        </FormControl>
      );
    });

    return (
      <Box className="flex-block child-margin box-margin" >
        {/* КНОПКА Режим редактирования текста */}
        <FormControlLabel
          control={
            <Switch
              checked={this.props.editText}
              onChange={this.switchEditText}
              title={this.props.editTitle}
              value="edit"
              color="primary"
            />
          }
        />

        {inputs}
      </Box>
    );
  }
}


export default connect(mapStateToProps)(MainSettingsPanel);