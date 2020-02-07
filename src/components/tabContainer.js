// tabContent

import React from "react";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles, updText } from '../actions/actionCreators';
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
    tabActive: +state.states.tabActive, // + конвертирует boolean в int
  }
}

// Текст, который можно редактировать
class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, index, ...other } = this.props;

    return (
      <Paper
        component="section">
        <header className="meta-title">
          <h2>{this.props.h2}</h2>
        </header>

        <Typography
          component="div"
          role="tabpanel"
          hidden={this.props.tabActive !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {children}
        </Typography>
      </Paper>
    );
  }
}


export default connect(mapStateToProps)(TabContainer);