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
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
}

// TabContainer.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };