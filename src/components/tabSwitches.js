// tabSwitches

import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as IconsLib from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

import sanitize from '../functions/sanitize';
import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles, updText } from '../actions/actionCreators';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    tabActive: +state.states.tabActive
  }
}


// настройка тегов
class TabSwitches extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (e, newValue) => {
    sanitize(); // записать новый текст, удалив неразрешённые теги
    updStates('tabActive', newValue);
  }

  render() {
    return (
      <Paper component={"nav"} className={"tabs-nav"}>
        <Tabs
          className={"clear-list"}
          value={this.props.tabActive}
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
        </Tabs>
      </Paper>
    )
  }
}

export default connect(mapStateToProps)(TabSwitches);