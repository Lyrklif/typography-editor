import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



// настройка тегов
export default class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.eventHandler = props.eventHandler;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
  }

  render() {
    let fontSizeValues = this.props.param.sizes.fontSize.values;
    let fontSizeList = fontSizeValues.map((elem, index) => {
      return (
        <MenuItem key={index} value={elem}>{elem}</MenuItem>
      );
    });

    let lineHeightValues = this.props.param.sizes.lineHeight.values;
    let lineHeightList = lineHeightValues.map((elem, index) => {
      return (
        <MenuItem key={index} value={elem}>{elem}</MenuItem>
      );
    });

    return (
      <Box className="flex-block child-margin box-margin" >
        {/* КНОПКА Режим редактирования текста */}
        <FormControlLabel
          control={
            <Switch
              checked={this.props.param.states.editText}
              onChange={this.switchEditText}
              title={this.props.param.buttons.edit}
              value="edit"
              color="primary"
            />
          }
        />


        {/* Размер текста */}
        <FormControl >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            onChange={value => this.eventHandler("fontSize", value)}
            value={this.props.param.styles.fontSize}
            title={this.props.param.inputs.fontSize}
          >
            {fontSizeList}
          </Select>
        </FormControl>

        {/* Высота строки */}
        <FormControl >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            onChange={value => this.eventHandler("lineHeight", value)}
            value={this.props.param.styles.lineHeight}
            title={this.props.param.inputs.lineHeight}
          >
            {lineHeightList}
          </Select>
        </FormControl>

      </Box>
    );
  }
}
