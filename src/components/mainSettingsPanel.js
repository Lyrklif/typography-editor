import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputLabel from '@material-ui/core/InputLabel';


import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import MenuList from '@material-ui/core/MenuList';


import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import IconButton from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
      <Box className="flex-block">
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
          >
            {lineHeightList}
          </Select>
        </FormControl>


      </Box>
    );
  }
}
