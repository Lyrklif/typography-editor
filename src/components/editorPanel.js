import React from "react";

import { SwatchesPicker } from "react-color";

import TagsPanel from "./TagsPanel";
import ButtonsPanel from "./ButtonsPanel";
import MainSettingsPanel from "./MainSettingsPanel";
import DialogLink from "./DialogLink";
import ColorPanel from "./ColorPanel";
import ColorPickerModal from "./ColorPickerModal";

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

import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles } from '../actions/actionCreators';
import { connect } from 'react-redux';

import {
  formatCommand_bgcolor,
  formatCommand_color,
} from "../vars";


const mapStateToProps = (state) => {
  return {
    colorPicker: !!+state.states.colorPicker,
    paletteEdit: !!+state.states.paletteEdit,
    dialogLink: !!+state.states.dialogLink,
  }
}


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
class EditorPanel extends React.Component {
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

              <MainSettingsPanel /> {/* основные настройки */}
              <Box><Divider orientation="vertical" /></Box>

              <ButtonsPanel /> {/* панель с кнопками */}
              <Box><Divider orientation="vertical" /></Box>

              <ColorPanel className="box-margin" />
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


            <ColorPickerModal /> {/* modal выбора цвета */}
            <DialogLink /> {/* modal ввода href для ссылки */}

          </Paper>
        </AppBar>
      </ElevationScroll>
    );
  }
}


export default connect(mapStateToProps)(EditorPanel);