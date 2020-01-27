import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
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
        </Grid>
        <Grid item xs={5}>
          {/* Размер шрифта */}
          <TextField
            id="fontSize-number"
            title={this.props.param.inputs.fontSize}
            type="number"
            size="small"
            defaultValue={this.props.param.styles.fontSize}
            onChange={value => this.eventHandler("fontSize", value)}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconsLib.FormatSize />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={5}>
          {/* Высота строки */}
          <TextField
            id="lineHeight-number"
            title={this.props.param.inputs.lineHeight}
            type="number"
            size="small"
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
                  <IconsLib.FormatLineSpacing />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    );
  }
}
