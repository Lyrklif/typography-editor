// Settings


import React from "react";

import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles } from '../actions/actionCreators';


import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  formatCommand_uppercase,
  formatCommand_lowercase,
} from "../vars";



// настройка тегов
export default class Settings extends React.Component {
  constructor(props) {
    super(props);

    // this.state = props.param;

    this.state = {
      ...props.param,
      isOpenAlert: false,
      typeAlert: 'info',
      textAlert: 'Сообщение',
    };

    this.updStates = props.updStates;
    this.save = props.save;
  }

  switchOpenSettings = () => {
    this.setState(state => ({
      states: {
        ...state.states,
        switchOpenSettings: !this.state.states.switchOpenSettings
      }
    }));
  };

  switchShowAlert = () => {
    this.setState(state => ({
      isOpenAlert: !this.state.isOpenAlert
    }));
  }

  showAlert = (type, text) => {
    this.setState(state => ({
      typeAlert: type,
      textAlert: text,
    }));

    this.switchShowAlert();
  }

  saveChange = () => {
    this.save(); // сохранить

    setTimeout(() => {
      if (localStorage.getItem("param") !== null) {
        this.showAlert('success', this.state.text.saveSuccess);
      } else {
        this.showAlert('error', this.state.text.saveError);
      }
    }, 0);
  }


  render() {
    return (
      <Box
        className={'settings-btn'}
      >

        <SpeedDial
          ariaLabel="SpeedDial example"
          hidden={false}
          icon={<IconsLib.TuneRounded />}
          onClose={this.switchOpenSettings}
          onOpen={this.switchOpenSettings}
          open={this.state.states.switchOpenSettings}
          direction={'up'}
        >
          <SpeedDialAction
            icon={<IconsLib.Save color="secondary" />}
            tooltipTitle={'Сохранить'}
            onClick={this.saveChange}
          />

          <SpeedDialAction
            icon={<IconsLib.Apps />}
            tooltipTitle={'Отображаемые иконки'}
            onClick={() => this.updStates('states', 'openSettingsTagsPanel')}
          />

          <SpeedDialAction
            icon={<IconsLib.Settings />}
            tooltipTitle={'Настройки'}
            onClick={() => this.updStates('states', 'openSettingsPanel')}
          />


        </SpeedDial>

        <Snackbar open={this.state.isOpenAlert} autoHideDuration={3000} onClose={this.switchShowAlert}>
          <MuiAlert elevation={6} variant="filled" severity={this.state.typeAlert}>
            {this.state.textAlert}
          </MuiAlert>
        </Snackbar>
      </Box>
    )
  }
}