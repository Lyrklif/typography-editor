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
  }

  switchOpenSettings = () => {
    this.setState(state => ({
      states: {
        ...state.states,
        switchOpenSettings: !this.state.states.switchOpenSettings
      }
    }));
  };

  render() {
    const actions = [
      { icon: <SaveIcon />, name: 'Сохранить' },
      { icon: <PrintIcon />, name: 'Печать' },
      { icon: <IconsLib.Settings />, name: 'Настройки' },
    ];

    return (
      <Box
        className={'settings-btn'}
      >

        <SpeedDial
          ariaLabel="SpeedDial example"
          hidden={false}
          icon={<IconsLib.MoreVert />}
          onClose={this.switchOpenSettings}
          onOpen={this.switchOpenSettings}
          open={this.state.states.switchOpenSettings}
          direction={'up'}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.switchOpenSettings}
            />
          ))}
        </SpeedDial>
      </Box>
    )
  }
}