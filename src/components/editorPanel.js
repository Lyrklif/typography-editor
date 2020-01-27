import React from "react";

import { SwatchesPicker } from "react-color";

import TagsPanel from "./tagsPanel";
import ButtonsPanel from "./buttonsPanel";
import MainSettingsPanel from "./mainSettingsPanel";

import Button from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import IconButton from "@material-ui/core/Button";


import {
  // formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color
  // formatCommand_link,
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

    this.handleChange = this.handleChange.bind(this);
    this.switchShowColorPiper = this.switchShowColorPiper.bind(this);
    this.changeColor = this.changeColor.bind(this);
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

  render() {
    return (
      <div>
        <div className="editor-panel">
          <h3 className="editor-panel__title">Панель редактирования</h3>

          <div className="editor-panel__inner editor-panel__scroll">
            {/* основные настройки */}
            <MainSettingsPanel
              param={this.props.param}
              classes="editor-panel__inner"
              eventHandler={this.setGlobalParam}
              reset={this.reset}
              switchEditText={this.switchEditText}
            />

            {/* панель с кнопками */}
            <ButtonsPanel
              param={this.props.param}
              classes="editor-panel__inner"
            // switchEditText={this.switchEditText}
            />

            {/* Выбор цвета */}
            <div className="editor-panel__inner">
              {/* Выбор цвета фона */}
              <Button
                variant="outlined"
                color="primary"
                size="small"
                title="Установить цвет фона"
                onClick={() => this.changeColor(formatCommand_bgcolor)}
                startIcon={<IconsLib.FormatColorFill />}
              >
                <span
                  className={"button-pallet__color"}
                  style={{ backgroundColor: this.state.styles.bgcolor }}
                ></span>
              </Button>

              {/* Выбор цвета текста */}
              <Button
                variant="outlined"
                color="primary"
                size="small"
                title="Установить цвет текста"
                onClick={() => this.changeColor(formatCommand_color)}
                startIcon={<IconsLib.FormatColorText />}
              >
                <span
                  className={"button-pallet__color"}
                  style={{ backgroundColor: this.state.styles.color }}
                ></span>
              </Button>
            </div>
          </div>

          {/* настройка тегов */}
          <TagsPanel
            param={this.state}
            editAllowed={
              this.props.param.states.tabActive == "0" ? true : false
            }
            classes="editor-panel__inner editor-panel__scroll"
            switchShowColorPiper={this.switchShowColorPiper}
          />
        </div>

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
      </div>
    );
  }
}
