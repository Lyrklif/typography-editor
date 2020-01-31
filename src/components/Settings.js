// Settings


import React from "react";

import IconButton from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import * as IconsLib from "@material-ui/icons";

import Fab from '@material-ui/core/Fab';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';


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

    this.state = props.param;
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

  settings = () => {

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
            onClick={this.save}
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
      </Box>
    )
  }
}