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

import {
  formatCommand_clear,
  formatCommand_bgcolor,
  formatCommand_color,
  formatCommand_link,
  formatCommand_uppercase,
  formatCommand_lowercase,
} from "../vars";



// настройка тегов
export default class SettingsTagsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;
    this.saveChange = props.saveChange;
  }

  saveNewSettings = () => {
    this.switchOpenSettingsTagPanel(); // закрыть панель
    this.saveChange(this.state.tagParameters);
  }

  switchOpenSettingsTagPanel = () => {
    this.setState(state => ({
      states: {
        ...state.states,
        openSettingsTagsPanel: !this.state.states.openSettingsTagsPanel
      }
    }));
  }

  handleChange = (group, tag) => {
    this.setState(state => ({
      tagParameters: {
        ...state.tagParameters,
        [group]: {
          ...state.tagParameters[group],
          [tag]: {
            ...state.tagParameters[group][tag],
            selected: !this.state.tagParameters[group][tag].selected,
          },
        },
      }
    }));
  }

  render() {
    // преобразовать объект в массив ключей, чтобы можно было использовать .map
    let tagParameters = this.state.tagParameters;
    let groupsTagArray = Object.keys(tagParameters);

    let groupsTagList = groupsTagArray.map((group, groupIndex) => {

      let groupTags = tagParameters[group];
      let groupTagKeys = Object.keys(groupTags);

      let tagList = groupTagKeys.map((tag, index) => {
        let cuttentTag = tagParameters[group][tag];

        if (cuttentTag.materialize) {
          let iconName = cuttentTag.materialize.iconName;
          let Icon = IconsLib[iconName];

          return (
            <Box component="li">
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    color="primary"
                    checked={cuttentTag.selected}
                    onChange={() => this.handleChange(group, tag)}
                    value={tag} />
                }
                label={
                  <Box component="span">
                    <IconButton
                      // color="primary"
                      size="small"
                      aria-label={cuttentTag.materialize.title}
                      title={cuttentTag.materialize.title}
                      name={tag}
                    >
                      <Icon />
                    </IconButton>
                    {cuttentTag.materialize.title}
                  </Box>
                }
              />
            </Box>
          );
        };
      });

      return (
        <Box
          component="li"
          key={groupIndex}
          aria-label="li item"
          className={"clear-list"}
        >
          <Box
            component="ul"
            className={"clear-list"}
            aria-label="ul items"
          >
            {tagList}
          </Box>
          {/* После последнего элемента не добавлять черту */}
          {(groupsTagArray.length - 1 !== groupIndex) &&
            <Divider />
          }
        </Box>
      );
    });




    return (
      <Dialog
        open={this.state.states.openSettingsTagsPanel}
        onClose={this.switchOpenSettingsTagPanel}
        aria-labelledby="form-dialog-settings-icons"
      >
        <DialogTitle id="form-dialog-title">{this.props.param.text.settingsTagsPanelTitle}</DialogTitle>
        <Divider />

        <DialogContent >
          <Box
            component="ul"
            className={"clear-list"}
          >
            {groupsTagList}
          </Box>
        </DialogContent>

        <Divider />
        <DialogActions>
          <Button onClick={this.switchOpenSettingsTagPanel} >
            {this.props.param.buttons.cancel}
          </Button>
          <Button onClick={this.saveNewSettings} color="secondary">
            {this.props.param.buttons.save}
          </Button>
        </DialogActions>

      </Dialog>
    )
  }
}