import React from "react";

import { SwatchesPicker } from "react-color";


import TagsPanel from "./tagsPanel";
import ButtonsPanel from "./buttonsPanel";
import MainSettingsPanel from "./mainSettingsPanel";
import DialogLink from "./dialogLink";

import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { restoreSelection } from '../functions/restoreSelection';

import {
  // formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  // default_bgcolor,
  // default_color,
} from "../vars";


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


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
  switchDialogLink(selectedText) {
    this.setState(state => ({
      states: {
        ...state.states,
        // заменить значение на противоположное
        dialogLink: !this.state.states.dialogLink
      },
      selectedText: selectedText
    }));
  }

  // добавить ссылку
  addLinkUrl = (href) => {
    this.switchDialogLink(); // закрыть модальное окно

    // если выделенный ранее текст записан
    if (this.state.selectedText) {
      restoreSelection(this.state.selectedText); // восстановить выделение

      document.execCommand('createLink', false, href); // добавить ссылку

      this.setState(state => ({
        selectedText: ''
      }));
    }
  }

  render() {
    return (
      <ElevationScroll>
        <AppBar
          component={'header'}
          position="fixed"
          color="inherit"
        >
          <h2 className="meta-title">Панель редактирования</h2>
          <Paper className={"editor-panel-wp editor-panel__inner"} >
            <Tabs
              aria-label="outlined primary button li group"
              className={"scrollbar--center"}
              orientation="horizontal"
              variant="scrollable"
              value={0}
            >

              {/* основные настройки */}
              <MainSettingsPanel
                param={this.props.param}
                eventHandler={this.setGlobalParam}
                reset={this.reset}
                switchEditText={this.switchEditText}
              />


              {/* панель с кнопками */}
              <ButtonsPanel
                param={this.props.param}
              />


              <Box>
                {/* Выбор цвета фона */}
                <Button
                  size="large"
                  color="primary"
                  title="Установить цвет фона"
                  onClick={() => this.changeColor(formatCommand_bgcolor)}
                  startIcon={<IconsLib.FormatColorFill color="inherit" />}
                >
                  <span
                    className={"button-pallet__color"}
                    style={{ backgroundColor: this.state.styles.bgcolor }}>
                  </span>
                </Button>

                {/* Выбор цвета текста */}
                <Button
                  size="large"
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
              </Box>

            </Tabs>


            <Divider />
            <TagsPanel
              param={this.state}
              tags={"tagParameters_outside"}
              editAllowed={
                this.props.param.states.tabActive == "0" ? true : false
              }
              switchShowColorPiper={this.switchShowColorPiper}
              showDialogLink={this.switchDialogLink}
            />



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
              addLinkUrl={this.addLinkUrl}
            />
          </Paper>
        </AppBar>
      </ElevationScroll>
    );
  }
}
