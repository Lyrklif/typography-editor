// tabSwitches

import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as IconsLib from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

import sanitize from '../functions/sanitize';
import { updStates } from '../actions/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    tabActive: +state.states.tabActive,
    tabText_Title: state.text.tabText_Title,
    tabHTML_Title: state.text.tabHTML_Title,
  }
}


class TabSwitches extends React.Component {
  constructor(props) {
    super(props);
  }

  // при переключении таба
  onChange = (e, newValue) => {
    sanitize(); // записать новый текст, удалив неразрешённые теги
    updStates('tabActive', newValue); // записать номер нового активного таба
  }

  render() {
    return (
      <Paper component={"nav"} className={"tabs-nav tabs-wrap"}>
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
            icon={<IconsLib.Subject />}
            aria-label={this.props.tabText_Title}
            title={this.props.tabText_Title} />
          <Tab
            icon={<IconsLib.SettingsEthernet />}
            aria-label={this.props.tabHTML_Title}
            title={this.props.tabHTML_Title} />
        </Tabs>
      </Paper>
    )
  }
}

export default connect(mapStateToProps)(TabSwitches);