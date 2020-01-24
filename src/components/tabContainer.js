// tabContent


import React from 'react';
import { render } from '@testing-library/react';

// Текст, который можно редактировать
export default class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <ul
        className={'clear-list'}
      >
        {children.map((elem, i) => (
          <li
            className={(this.props.show == i) ? 'show tab' : 'tab'}
            key={i}
          >
            {elem}
          </li>
        ))}
      </ul>
    );
  }
};