// tabContent

import React from "react";
import Box from "@material-ui/core/Box";

// Текст, который можно редактировать
export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { children } = this.props;

    const { children, value, index, ...other } = this.props;

    return (
      <ul className={"clear-list"}
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {/* {children.map((elem, i) => (
          <li className={this.props.show == i ? "show tab" : "tab"} key={i}>
            {elem}
          </li>
        ))} */}

        <Box p={3}>{children}</Box>
      </ul>
    );
  }
}
