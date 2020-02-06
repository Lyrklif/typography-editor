// SettingsTagsPanel

import React from "react";

import IconButton from "@material-ui/core/Button";
import * as IconsLib from "@material-ui/icons";

import Box from "@material-ui/core/Box";
import Fab from '@material-ui/core/Fab';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';


import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';


import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';


import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


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
export default class SettingsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;
    this.saveChange = props.saveChange;
    this.reset = props.reset;
    this.updStates = props.updStates;
  }

  saveNewSettings = () => {
    this.updStates('states', 'openSettingsPanel') // закрыть панель
    this.saveChange();
  }


  render() {
    return (
      <Dialog
        open={this.props.param.states.openSettingsPanel}
        onClose={() => this.updStates('states', 'openSettingsPanel')}
        aria-labelledby="form-dialog-settings-icons"
      >
        <DialogTitle id="form-dialog-title">{this.props.param.text.settingsPanelTitle}</DialogTitle>
        <Divider />

        <DialogContent >
          <Button
            variant="contained"
            color="secondary"
            onClick={this.reset}
            startIcon={<IconsLib.RotateLeft />}
          >
            {this.props.param.buttons.reset}
          </Button>

        </DialogContent>

        <Divider />
        <DialogActions>
          <Button onClick={() => this.updStates('states', 'openSettingsPanel')} >
            {this.props.param.buttons.cancel}
          </Button>
          <Button onClick={this.saveNewSettings} color="secondary">
            {this.props.param.buttons.apply}
          </Button>
        </DialogActions>

      </Dialog>
    )
  }
}