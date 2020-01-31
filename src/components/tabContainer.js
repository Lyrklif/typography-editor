// tabContent

import React from "react";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


// Текст, который можно редактировать
export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, value, index, ...other } = this.props;

    return (
      <Paper
        component="section">
        <header className="meta-title">
          <h2>{this.props.h2}</h2>
        </header>

        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
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