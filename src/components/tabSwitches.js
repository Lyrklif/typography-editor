// tabSwitches

import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as IconsLib from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

// настройка тегов
export default class TabSwitches extends React.Component {
  constructor(props) {
    super(props);

    this.state = props;
    this.onChange = this.props.onChange;
  }


  render() {
    return (
      <Paper component={"nav"} >
        <Tabs
          className={"clear-list"}
          value={this.props.value}
          onChange={this.onChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab
            icon={<IconsLib.Subject />}
            aria-label="Режим просмотра текста"
            title="Режим просмотра текста" />
          <Tab
            icon={<IconsLib.SettingsEthernet />}
            aria-label="Режим просмотра HTML"
            title="Режим просмотра HTML" />
          <Tab
            icon={<IconsLib.Texture />}
            aria-label="Режим просмотра CSS"
            title="Режим просмотра CSS"
            disabled
          />
        </Tabs>
      </Paper>
    )
  }
}