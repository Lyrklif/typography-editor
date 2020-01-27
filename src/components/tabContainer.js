// tabContent

import React from "react";
import Box from "@material-ui/core/Box";

import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';



// Текст, который можно редактировать
export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, value, index, ...other } = this.props;

    return (
      <Typography
        component="section"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <h2 className="meta-title">{this.props.blockTitle}</h2>
        {children}
      </Typography>
    );
  }
}

// TabContainer.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };