import React from "react";

// import Input from "./input";
// import Button from "./button";
import Button from "@material-ui/core/Button";
import ButtonOnOff from "./buttonOnOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

import IconButton from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

// настройка тегов
export default class MainSettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
    this.reset = props.reset;
    this.switchEditText = props.switchEditText;
  }

  render() {
    return (
      <div className={this.props.classes}>
        {/* КНОПКА Вернуть стандартные настройки */}
        {/* <Button
          param={this.props.param}
          clickEvent={this.reset}
          text={this.props.param.buttons.reset}
          icon="icon-clear"
          /> */}

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

        {/* Размер шрифта */}
        <TextField
          id="fontSize-number"
          label={this.props.param.inputs.fontSize}
          title={this.props.param.inputs.fontSize}
          type="number"
          defaultValue={this.props.param.styles.fontSize}
          onChange={value => this.eventHandler("fontSize", value)}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconsLib.FormatSize color="primary" />
              </InputAdornment>
            )
          }}
        />

        {/* Высота строки */}
        <TextField
          id="lineHeight-number"
          label={this.props.param.inputs.lineHeight}
          title={this.props.param.inputs.lineHeight}
          type="number"
          step="0.1"
          defaultValue={this.props.param.styles.lineHeight}
          onChange={value => this.eventHandler("lineHeight", value)}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            inputProps: { step: 0.1 },
            startAdornment: (
              <InputAdornment position="start">
                <IconsLib.FormatLineSpacing color="primary" />
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  }
}
