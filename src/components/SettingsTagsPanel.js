// SettingsTagsPanel

import React from "react";

import * as IconsLib from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
export default class SettingsTagsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;
    this.saveChange = props.saveChange;
    // this.updStates = props.updStates;
  }

  switchShowPanel = () => {
    updStates('openSettingsTagsPanel');
  }

  saveNewSettings = () => {
    this.switchShowPanel(); // закрыть панель
    // this.saveChange(this.state.tagParameters);
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
                  <Box component="span" className="label-icon-text">
                    <Icon />
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
        open={this.props.param.states.openSettingsTagsPanel}
        onClose={this.switchShowPanel}
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
          <Button onClick={this.switchShowPanel} >
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