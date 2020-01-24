// tabSwitches

import React from 'react';

import Button from './button';

// настройка тегов
export default class TabSwitches extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.clickEvent = this.props.clickEvent;
  }


  render() {
    return (
      <div className={this.props.classes}>
        {/* КНОПКА скачать */}
        <Button
          param={this.props.param}
          clickEvent={this.clickEvent}
          text={this.props.param.buttons.text}
          name='0'
          icon='icon-text-graphical'
        />
        <Button
          param={this.props.param}
          clickEvent={this.clickEvent}
          text={this.props.param.buttons.html}
          name='1'
          icon='icon-html'
        />
        <Button
          param={this.props.param}
          clickEvent={this.clickEvent}
          text={this.props.param.buttons.css}
          name='2'
          icon='icon-css'
        />
      </div>
    )
  }
}