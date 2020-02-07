// colorPickerModal

import React from "react";
import Dialog from '@material-ui/core/Dialog';
import Button from "@material-ui/core/Button";
import { SwatchesPicker } from "react-color";

import { updStates, updStyles } from '../actions/actionCreators';
import { connect } from 'react-redux';





const mapStateToProps = (state) => {
  return {
    bgcolor: state.styles.bgcolor,
    color: state.styles.color,
    colorPicker: state.states.colorPicker,
    paletteEdit: state.states.paletteEdit,
    close: state.buttons.close,
  }
}


// настройка тегов
class colorPickerModal extends React.Component {
  constructor(props) {
    super(props);
  }


  // показать/скрыть modal
  switchShowColorPiper = () => {
    updStates('colorPicker');
  }

  // при изменении цвета
  handleChange = (color) => {
    updStyles(this.props.paletteEdit, color.hex); // изменить цвет для палитры
  }

  render() {
    return (
      <Dialog
        open={this.props.colorPicker}
        onClose={this.switchShowColorPiper}
        aria-labelledby="form-dialog-color"
      >
        <Button onClick={this.switchShowColorPiper} color="primary">{this.props.close}</Button>

        <SwatchesPicker
          onChange={this.handleChange}
          color={this.props.paletteEdit === 'bgcolor' ? this.props.bgcolor : this.props.color}
        />
      </Dialog>
    );
  }
}


export default connect(mapStateToProps)(colorPickerModal);