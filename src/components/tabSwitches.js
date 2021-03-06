// tabSwitches

import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as IconsLib from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

// настройка тегов
export default class TabSwitches extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.props.onChange;
  }


  render() {
    return (
      <Paper component={"nav"} className={"tabs-nav"}>
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
            // label="Текст"
            icon={<IconsLib.Subject />}
            aria-label="Режим просмотра текста"
            title="Режим просмотра текста" />
          <Tab
            // label="HTML"
            icon={<IconsLib.SettingsEthernet />}
            aria-label="Режим просмотра HTML"
            title="Режим просмотра HTML" />
          <Tab
            // label="CSS"
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