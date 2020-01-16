import React from 'react';
import { render } from '@testing-library/react';

import Tag from './tag';

// настройка тегов
export default class TagsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.eventHandler = props.eventHandler;
  }

  render() {
    // преобразовать объект в массив, чтобы его мог считать .map    
    // let tagsArray = Object.values(this.state.tags);

    let tagList = this.state.sanitizeParam.allowedTags.map((elem, index) => {
      return (
        <Tag
          key={index}
          param={this.state}
          eventHandler={this.eventHandler}
          text={elem}
          classes="tag"
        />
      )
    });

    return (
      <div
        className={this.props.classes}
      >
        {tagList}

      </div>
    )
  }
}