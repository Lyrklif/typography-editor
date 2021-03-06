import React from "react";

import { SwatchesPicker } from "react-color";


import TagsPanel from "./TagsPanel";
import ButtonsPanel from "./ButtonsPanel";
import MainSettingsPanel from "./MainSettingsPanel";
import DialogLink from "./DialogLink";

import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Dialog from '@material-ui/core/Dialog';


import { restoreSelection } from '../functions/restoreSelection';

import {
  formatCommand_bgcolor,
  formatCommand_color,
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
    this.setNewColor = props.setNewColor;

    this.handleChange = this.handleChange.bind(this);
    this.switchShowColorPiper = this.switchShowColorPiper.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.switchDialogLink = this.switchDialogLink.bind(this);
  }

  // при изменении цвета в палитре
  handleChange(color) {
    this.setState(state => ({
      styles: {
        ...state.styles,
        [state.states.paletteEdit]: color.hex // изменить цвет для палитры
      }
    }));

    // записать изменения в главный this.state
    this.setNewColor('styles', this.state.states.paletteEdit, color.hex);
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
          <Paper className={"editor-panel-wp editor-panel__inner"}>
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
              <Box>
                <Divider orientation="vertical" />
              </Box>

              {/* панель с кнопками */}
              <ButtonsPanel
                param={this.props.param}
              />

              <Box>
                <Divider orientation="vertical" />
              </Box>

              <Box className="box-margin">
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
              param={this.props.param}
              values={this.state.styles}
              tags={"tagParameters_outside"}
              editAllowed={
                this.props.param.states.tabActive == "0" ? true : false
              }
              switchShowColorPiper={this.switchShowColorPiper}
              showDialogLink={this.switchDialogLink}
            />


            {/* Панель выбора цвета */}
            <Dialog
              open={this.state.states.colorPicker}
              onClose={this.switchShowColorPiper}
              aria-labelledby="form-dialog-color"
            >
              <Button onClick={this.switchShowColorPiper} color="primary">
                {this.props.param.buttons.close}
              </Button>

              <SwatchesPicker
                onChange={this.handleChange}
                color={this.state.styles.bgcolor}
              />
            </Dialog>


            <DialogLink
              param={this.state}
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
