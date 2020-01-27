import React from "react";

import { SwatchesPicker } from "react-color";

import TagsPanel from "./tagsPanel";
import ButtonsPanel from "./buttonsPanel";
import MainSettingsPanel from "./mainSettingsPanel";
import DialogLink from "./dialogLink";

import Button from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import Modal from '@material-ui/core/Modal';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import {
  // formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  // default_bgcolor,
  // default_color,
} from "../vars";

// панель редактирования
export default class EditorPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.setGlobalParam = props.setGlobalParam;
    this.switchEditText = props.switchEditText;
    this.tabSwitch = props.tabSwitch;
    this.dialogLink = props.dialogLink;

    this.handleChange = this.handleChange.bind(this);
    this.switchShowColorPiper = this.switchShowColorPiper.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.switchDialogLink = this.switchDialogLink.bind(this);
  }

  // при изменении выбранного цвета в палитре
  handleChange(color) {
    this.setState(state => ({
      styles: {
        ...state.styles,
        [state.states.paletteEdit]: color.hex // изменить цвет для палитры
      }
    }));
  }

  // смена статуса панели выбора цвета [показать/скрыть]
  switchShowColorPiper() {
    this.setState(state => ({
      states: {
        ...state.states,
        colorPicker: !state.states.colorPicker
      }
    }));
  }

  // при открытии панели выбора цвета, нажатием на палитру
  changeColor(param) {
    this.setState(state => ({
      states: {
        ...state.states,
        paletteEdit: param // изменить палитру, которую сейчас редактируем
      }
    }));

    this.switchShowColorPiper();
  }

  // показать/скрыть диалог ввода ссылки
  switchDialogLink() {
    this.setState(state => ({
      states: {
        ...state.states,
        // заменить значение на противоположное
        dialogLink: !this.state.states.dialogLink
      }
    }));
  }

  // addLinkUrl = (href) => {
  //   this.switchDialogLink();

  //   console.log(this.state);
  //   let commands = this.state.tagParameters[formatCommand_link].command;

  //   if (commands) {
  //     for (let i = 0; i < commands.length; i++) {
  //       if (!href) href = commands[i][2].toUpperCase();
  //       document.execCommand(commands[i][0], commands[i][1], href);
  //     }
  //   }
  // }



  render() {
    return (
      <div>
        <h2 className="editor-panel__title">Панель редактирования</h2>

        <Paper>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {/* основные настройки */}
              <MainSettingsPanel
                param={this.props.param}
                classes="editor-panel__inner"
                eventHandler={this.setGlobalParam}
                reset={this.reset}
                switchEditText={this.switchEditText}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              {/* панель с кнопками */}
              <ButtonsPanel
                param={this.props.param}
                classes="editor-panel__inner"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              {/* Выбор цвета фона */}
              <Button
                color="primary"
                title="Установить цвет фона"
                onClick={() => this.changeColor(formatCommand_bgcolor)}
                startIcon={<IconsLib.FormatColorFill />}
              >
                <span
                  className={"button-pallet__color"}
                  style={{ backgroundColor: this.state.styles.bgcolor }}>
                </span>
              </Button>

              {/* Выбор цвета текста */}
              <Button
                color="primary"
                title="Установить цвет текста"
                onClick={() => this.changeColor(formatCommand_color)}
                startIcon={<IconsLib.FormatColorText />}
              >
                <span
                  className={"button-pallet__color"}
                  style={{ backgroundColor: this.state.styles.color }}>
                </span>
              </Button>
            </Grid>
          </Grid>
        </Paper>



        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              {/* настройка тегов */}
              <TagsPanel
                param={this.state}
                editAllowed={
                  this.props.param.states.tabActive == "0" ? true : false
                }
                classes="editor-panel__inner editor-panel__scroll"
                switchShowColorPiper={this.switchShowColorPiper}
                showDialogLink={this.switchDialogLink}
              />
            </Paper>
          </Grid>
        </Grid>



        {/* Панель выбора цвета */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.states.colorPicker}
          onClose={this.switchShowColorPiper}
        >

          <div className={"color-picker-wp"}>
            <Button
              variant="contained"
              color="primary"
              label="Закрыть"
              aria-label="close"
              onClick={this.switchShowColorPiper}
              size="medium"
              className={"color-picker-wp__close"}
              endIcon={<IconsLib.HighlightOff />}
            >
              Закрыть
            </Button>

            <SwatchesPicker
              onChange={this.handleChange}
              color={this.state.styles.bgcolor}
            />
          </div>
        </Modal>

        <DialogLink
          isOpen={this.state.states.dialogLink}
          switchDialogLink={this.switchDialogLink}
        // addLinkUrl={this.addLinkUrl}
        />
      </div>
    );
  }
}
