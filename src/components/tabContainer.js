// tabContent

import React from "react";
import Box from "@material-ui/core/Box";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';



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
          <h2>{this.props.blockTitle}</h2>
        </header>

        <Typography
          // color="textPrimary"
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

// TabContainer.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };