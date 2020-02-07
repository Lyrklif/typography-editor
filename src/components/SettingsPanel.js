// SettingsTagsPanel

import React from "react";

import * as IconsLib from "@material-ui/icons";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { clearLocalStorage } from '../functions/localStorage';

import { updStore, updStates, updSizes, updStyles, updTagParameters, updText } from '../actions/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    openSettingsPanel: !!+state.states.openSettingsPanel,
    settingsPanelTitle: state.text.settingsPanelTitle,
    cancel: state.buttons.cancel,
    apply: state.buttons.apply,
    reset: state.buttons.reset,
  }
}

// настройка тегов
class SettingsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.param;
  }

  // показать/скрыть панель
  switchShowModal = () => {
    updStates('openSettingsPanel');
  }

  saveChange = (newTagsParam) => {
    this.switchShowModal(); // закрыть панель
    // updTagParameters(newTagsParam);
  }

  // вернуть стандартные настройки
  reset = () => {
    clearLocalStorage();

    // this.setState(state => ({
    //   ...this.props.data,
    //   html: this.state.html
    // }));
  }


  render() {
    return (
      <Dialog
        open={this.props.openSettingsPanel}
        // onClose={this.saveChange}
        aria-labelledby="form-dialog-settings-icons"
      >
        <DialogTitle id="form-dialog-title">{this.props.settingsPanelTitle}</DialogTitle>
        <Divider />

        <DialogContent >
          <Button
            variant="contained"
            color="secondary"
            onClick={this.reset}
            startIcon={<IconsLib.RotateLeft />}
          >
            {this.props.reset}
          </Button>

        </DialogContent>

        <Divider />
        <DialogActions>
          <Button onClick={this.switchShowModal} >
            {this.props.cancel}
          </Button>
          <Button onClick={this.saveChange} color="secondary">
            {this.props.apply}
          </Button>
        </DialogActions>

      </Dialog>
    )
  }
}

export default connect(mapStateToProps)(SettingsPanel);